import ApplicationDate from "../ApplicationDate/ApplicationDate";
import './ApplicationItem.css';

const ApplicationItem = (props) => {
    return (
        <div className='application-item'>
            <ApplicationDate date={props.date} />
            <div className='application-item__description'>
                <h2>{props.title}</h2>
                <div className='application-item__status'>{props.status}
                </div>
            </div>
        </div>
    );
}
export default ApplicationItem;