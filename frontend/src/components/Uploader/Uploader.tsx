import { FC } from 'react';
import { Upload, Button, UploadProps } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

interface IProps {
  props: UploadProps;
}
export const Uploader: FC<IProps> = ({ props }): JSX.Element => {
  return (
    <Upload {...props}>
      <Button icon={<UploadOutlined />}>Upload png and jpg only</Button>
    </Upload>
  );
};
