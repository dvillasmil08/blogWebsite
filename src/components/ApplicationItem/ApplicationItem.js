import ApplicationDate from '../ApplicationDate/ApplicationDate';
import './ApplicationItem.css';
import { Link } from 'react-router-dom';
// import ApplicationContent from "../ApplicationContent/ApplicationContent";

const ApplicationItem = (props) => {
  return (
    <div className='application-item'>
      <ApplicationDate date={props.date} />
      <div className='application-item__description'>
        <Link to='/application' style={{ textDecoration: 'none' }}>
          <h2>
            <a>{props.title}</a>
          </h2>
        </Link>
      </div>

      <div className='application-item__status'>{props.status}</div>
    </div>
  );
};
export default ApplicationItem;
