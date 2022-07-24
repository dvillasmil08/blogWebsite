import ApplicationDate from "../ApplicationDate/ApplicationDate";
import './ApplicationItem.css';
import { Link, Outlet } from 'react-router-dom'

const ApplicationItem = (props) => {
    return (
        <div className='application-item'>
            <ApplicationDate date={props.date} />
            <div className='application-item__description'>
                <h2>
                    <nav>
                        <Link to='/viewApplication'>{props.title}</Link>
                    </nav>
                </h2>



            <div className='application-item__status'>{props.status}</div>
            </div>
            <Outlet />
        </div>
    );
}
export default ApplicationItem;