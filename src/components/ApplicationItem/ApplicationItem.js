import ApplicationDate from "../ApplicationDate/ApplicationDate";
import './ApplicationItem.css';
// import { Link, Outlet, BrowserRouter, Route, Router } from 'react-router-dom'
// import ApplicationContent from "../ApplicationContent/ApplicationContent";

const ApplicationItem = (props) => {
    return (
        <div className='application-item'>
            <ApplicationDate date={props.date} />
            <div className='application-item__description'>



            {/* <BrowserRouter>
                    <Router>
                        <Route path="/viewApplication" element={<ApplicationContent />}>

                        </Route>
                    </Router>
                </BrowserRouter>
                
                <h2>
                    <nav>
                        <Link to='/viewApplication'>{props.title}</Link>
                    </nav>
                </h2> */}

                <h2>{props.title}</h2>



            <div className='application-item__status'>{props.status}</div>
            </div>
            {/* <Outlet /> */}
        </div>
    );
}
export default ApplicationItem;