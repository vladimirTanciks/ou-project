import { ReportForm } from '../../components/ReportForm/ReportForm';
import { Map } from '../../components/Map/Map';

export const Report = () => {
  return (
    <div
      style={{
        fontWeight: 700,
        fontSize: 35,
        marginBottom: 30,
        padding: 50,
        height: '100%',
      }}
    >
      <h1>Add new report</h1>
      <div
        style={{ width: '100%', height: 'auto', padding: 20, display: 'flex' }}
      >
        <div style={{ width: '50%' }}>
          <ReportForm />
        </div>
        <div style={{ height: 'auto', width: '50%' }}>
          <Map />
        </div>
      </div>
    </div>
  );
};
