import Application from "../Application/Application";
import ApplicationDate from "../ApplicationDate/ApplicationDate";
import Navbar from '../NavBar/NavBar';
import './ApplicationContent.css';

const ApplicationContent = (props) => {
    return (
        <div>
            <div className='applicationView-item'>
                    {/* <ApplicationDate /> */}
                    <div className='applicationView-item__description'>

                        {/* <ApplicationDate date={props.date} /> */}
                            <h2>Title{props.title}</h2>
                            <p>Descripton{props.decription}</p>
                        <div className='applicationView-item__status'>Status{props.status}</div>
                    </div>
                    <div>
                        
                    </div>
            </div>
        </div>
    );
}
export default ApplicationContent;