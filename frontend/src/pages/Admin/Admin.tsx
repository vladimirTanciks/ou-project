import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Table, Button } from 'antd';
import { AppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';

import { fetchAllReports } from '../../redux/features/reports';

import img1 from '../../images/d1.jpg';
import img2 from '../../images/d2.jpg';
import { RootState } from '../../redux/store';

const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Image',
    dataIndex: 'image',
    key: 'image',
    render: (imgSrc: string) => (
      <img alt="reported dump" style={{ width: 60 }} src={imgSrc} />
    ),
  },
  {
    title: 'Size',
    key: 'size',
    dataIndex: 'size',
  },
  {
    title: 'Type',
    key: 'type',
    dataIndex: 'type',
  },
  {
    title: 'Location',
    key: 'location',
    dataIndex: 'location',
  },
  {
    title: 'Reported',
    key: 'user',
    dataIndex: 'user',
  },
  {
    title: 'Action',
    key: 'action',
    dataIndex: 'action',
    render: (text: JSX.Element) => <Button type="text">Delete</Button>,
  },
];

const Admin = () => {
  const dispatch: AppDispatch = useDispatch();
  const reports = useSelector((state: RootState) => state.reports.data);

  useEffect(() => {
    dispatch(fetchAllReports());
  }, [dispatch]);

  return (
    <div>
      <div style={{ padding: 50 }}>
        <h1 style={{ marginBottom: '30px', fontWeight: 700, fontSize: 35 }}>
          Manage reports
        </h1>
        <Table bordered={true} columns={columns} dataSource={reports || []} />
      </div>
    </div>
  );
};

export default Admin;
