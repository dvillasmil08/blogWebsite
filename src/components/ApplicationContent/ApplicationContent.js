import './ApplicationContent.css';
import Application from '../Application/Application';
import NewComment from '../Comment/NewComment';

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
        <div>Descripton{props.decription}</div>
        <NewComment />
      </div>
    </div>
  );
};
export default ApplicationContent;
