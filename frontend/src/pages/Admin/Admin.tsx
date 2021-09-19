import { Popconfirm } from 'antd';
import { useEffect } from 'react';
import { Table, Button } from 'antd';
import { useAppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';

import { deleteReport, fetchAllReports } from '../../redux/features/reports';
import { RootState } from '../../redux/store';

const Admin = () => {
  const dispatch = useAppDispatch();
  const reports = useSelector((state: RootState) => state.reports.data);
  const user = useSelector((state: RootState) => state.auth.accountData?.user);

  const confirm = async (id: string) => {
    await dispatch(deleteReport(id));
    dispatch(fetchAllReports());
  };

  const isYourReport = (id: string) => {
    if (!reports || reports.length < 1) return false;

    const selectedReport = reports.find((report) => report.id === id);

    return selectedReport?.user === user;
  };

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'id',
      render: (imgSrc: string) => (
        <img alt="reported dump" style={{ width: 60 }} src={imgSrc} />
      ),
    },
    {
      title: 'Size',
      key: 'id',
      dataIndex: 'size',
    },
    {
      title: 'Type',
      key: 'id',
      dataIndex: 'type',
    },
    {
      title: 'Location',
      key: 'id',
      dataIndex: 'location',
    },
    {
      title: 'Reported',
      key: 'id',
      dataIndex: 'user',
    },
    {
      title: 'Action',
      key: 'id',
      dataIndex: 'id',
      render: (id: string) => {
        return (
          <Popconfirm
            title="Are you sure to delete this report?"
            onConfirm={() => confirm(id)}
            okText="Yes"
            cancelText="No"
          >
            <Button
              type="text"
              style={{ color: isYourReport(id) ? 'red' : 'grey' }}
              disabled={!isYourReport(id)}
            >
              Delete
            </Button>
          </Popconfirm>
        );
      },
    },
  ];

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
