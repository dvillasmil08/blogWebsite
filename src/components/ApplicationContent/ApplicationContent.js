import './ApplicationContent.css';
import Application from '../Application/Application';

const ApplicationContent = (props) => {
  return (
    <div className='applicationSection'>
      <div className='applicationView-item'>
        <div className='applicationView-item__description'>
          {/* <ApplicationDate date={props.date} /> */}
          <h2>Title{props.title}</h2>
          <div className='applicationView-item__status'>
            Status{props.status}
          </div>
        </div>
      </div>
      <div className='appBody'>
        <p>Descripton{props.decription}</p>
      </div>
    </div>
  );
};
export default ApplicationContent;
