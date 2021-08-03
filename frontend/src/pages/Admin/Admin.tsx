import { Table, Tag, Space } from 'antd';
import { Header } from '../../components/Header/Header';

import img1 from '../../images/d1.jpg';
import img2 from '../../images/d2.jpg';

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
    render: (imgSrc: string) => <img style={{ width: 60 }} src={imgSrc} />,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Size',
    key: 'size',
    dataIndex: 'size',
  },
  {
    title: 'Location',
    key: 'location',
    dataIndex: 'location',
  },
  {
    title: 'Reported',
    key: 'reported',
    dataIndex: 'reported',
  },
  {
    title: 'Show details',
    key: 'showDetails',
    dataIndex: 'showDetails',
    render: (text: JSX.Element) => <a>{text}</a>,
  },
  {
    title: 'Action',
    key: 'action',
    dataIndex: 'action',
    render: (text: JSX.Element) => <a>{text}</a>,
  },
];

const data = [
  {
    id: 1,
    image: img1,
    status: 'still there',
    size: 'car needed',
    location: 'New Castle',
    reported: '29 days ago',
    showDetails: 'Details',
    action: 'Delete',
  },
  {
    id: 2,
    image: img2,
    status: 'still there',
    size: 'car needed',
    location: 'Lincoln',
    reported: '15 days ago',
    showDetails: 'Details',
    action: 'Delete',
  },
];

const Admin = () => {
  return (
    <div>
      <Header />

      <div style={{ padding: 50 }}>
        <h1 style={{ marginBottom: '30px', fontWeight: 700, fontSize: 35 }}>
          Manage reports
        </h1>
        <Table bordered={true} columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default Admin;
