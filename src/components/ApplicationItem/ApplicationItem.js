import ApplicationDate from "../ApplicationDate/ApplicationDate";
import './ApplicationItem.css';
import { Link } from 'react-router-dom'
// import ApplicationContent from "../ApplicationContent/ApplicationContent";

const ApplicationItem = (props) => {
    return (
        <div className='application-item'>
            <ApplicationDate date={props.date} />
            <div className='application-item__description'>

                <Link to='/application' className="btn">
                    <h2>{props.title}</h2>
                </Link>


            <div className='application-item__status'>{props.status}</div>
            </div>
        </div>
    );
}
export default ApplicationItem;