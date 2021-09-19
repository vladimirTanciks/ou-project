import { useState, useEffect } from 'react';
import { Form, Input, Radio, Space, Button, message, Upload } from 'antd';
import { useHistory } from 'react-router';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from '../../redux/store';

import { isSupportedMedia } from '../../utils';

import { storage } from '../../firebase';

import { setMapCoords } from '../../redux/features/map';
import { createReport } from '../../redux/features/reports';
import { clearNotification, showNotification } from '../../redux/features/ui';
import { RootState } from '../../redux/store';
import { NotificatorInfo, Report } from '../../types';

import { routes } from '../../router/routes';

import { StyleRadioWrapper } from './styled';

import { Uploader } from '../Uploader/Uploader';

export const ReportForm = () => {
  const history = useHistory();

  const [radioState, setRadioState] = useState({ type: 'glass', size: 'bag' });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { lat, lng } = useSelector((state: RootState) => state.map.coords);
  const [uploadedFile, setUploadedFile] = useState<File>();
  const selectedCoords = `${lat}, ${lng}`;

  const dispatch: AppDispatch = useDispatch();

  const uploadImageToStore = (values: any) => {
    if (!uploadedFile) return;

    setIsLoading(true);

    const imageRef = ref(storage, 'images/' + uploadedFile?.name);

    return uploadBytes(imageRef, uploadedFile)
      .then((snapshot) => {
        // Get a download URL for the file.
        getDownloadURL(snapshot.ref).then((url) => {
          setIsLoading(false);

          const formData: Report = {
            location: selectedCoords,
            image: url,
            type: radioState.type,
            size: radioState.size,
            ...values,
          };

          dispatch(createReport(formData)).then(() => {
            history.push(routes.MAP);
          });
        });
      })
      .catch(() => {
        setIsLoading(false);
        dispatch(
          showNotification({ message: 'Image upload failed', type: 'error' }),
        );
      });
  };

  const onFinish = (values: any) => {
    if (!uploadedFile) {
      dispatch(showNotification({ message: 'Image required', type: 'error' }));
      return;
    }

    uploadImageToStore(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const getDeviceLocation = () => {
    if (!navigator?.geolocation) return;

    const onSuccess = ({ coords }: GeolocationPosition) => {
      dispatch(setMapCoords({ lat: coords.latitude, lng: coords.longitude }));
    };

    const onFailure = ({ message }: GeolocationPositionError) => {
      const notification: NotificatorInfo = {
        type: 'error',
        message,
      };

      dispatch(showNotification(notification));
    };

    navigator.geolocation.getCurrentPosition(onSuccess, onFailure);
  };

  const uploaderProps = {
    beforeUpload: (file: File) => {
      if (!isSupportedMedia(file.type)) {
        message.error(`${file.name} is not supported file`);
      }

      return isSupportedMedia(file.type) ? true : Upload.LIST_IGNORE;
    },

    onChange: (info: any) => {
      console.log(info);
      setUploadedFile(info.fileList[0].originFileObj);
    },
  };

  const handleRadioChange = (e: any) => {
    setRadioState((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    return () => {
      dispatch(clearNotification());
    };
  }, [dispatch]);

  return (
    <Form
      layout="vertical"
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <StyleRadioWrapper>
        <Form.Item>
          <Radio.Group
            name="type"
            style={{ marginRight: 100 }}
            defaultValue="glass"
            onChange={handleRadioChange}
          >
            <div style={{ marginBottom: 10, fontSize: 20 }}>Type</div>

            <Space direction="vertical">
              <Radio defaultChecked value="glass">
                Glass
              </Radio>
              <Radio value="metal">Metal</Radio>
              <Radio value="construction">Construction</Radio>
              <Radio value="automotive">Automotive</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item>
          <Radio.Group
            onChange={handleRadioChange}
            defaultValue="bag"
            name="size"
          >
            <div style={{ marginBottom: 10, fontSize: 20 }}>Size</div>
            <Space direction="vertical">
              <Radio defaultChecked value="bag">
                Fits in a bag
              </Radio>
              <Radio value="car">Needs a car</Radio>
              <Radio value="van">Needs a van</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>
      </StyleRadioWrapper>

      <div style={{ marginBottom: 10, marginTop: 30, fontSize: 20 }}>
        Location (Select using map or device)
      </div>

      <Form.Item style={{ marginBottom: 0 }}>
        <Form.Item
          style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
        >
          <Input
            name="location"
            placeholder="Location"
            value={selectedCoords}
            style={{ background: '#f0f2f5', color: 'black' }}
            disabled
          />
        </Form.Item>
        <Form.Item
          style={{
            display: 'inline-block',
            width: 'calc(50% - 8px)',
            margin: '0 8px',
          }}
        >
          <Button
            type="default"
            style={{
              marginLeft: 10,
              width: '100%',
            }}
            onClick={getDeviceLocation}
          >
            Use device to get location
          </Button>
        </Form.Item>
      </Form.Item>

      <div style={{ marginBottom: 10, marginTop: 30, fontSize: 20 }}>
        Details
      </div>

      <Form.Item name="details">
        <Input.TextArea rows={4} />
      </Form.Item>

      <div
        style={{
          marginBottom: 10,
          marginTop: 30,

          fontSize: 20,
        }}
      >
        <span style={{ marginRight: 30 }}>Upload image</span>
        <Uploader props={uploaderProps} />
      </div>

      <Button
        htmlType="submit"
        type="primary"
        style={{ marginTop: 50 }}
        loading={isLoading}
      >
        Submit report
      </Button>
    </Form>
  );
};
