// import ApplicationContent from "../ApplicationContent/ApplicationContent";
import ApplicationItem from "../ApplicationItem/ApplicationItem";
import './Application.css';

const Application = (props) => {


return (
    <div className="applications">
        <ApplicationItem
        title={props.items[0].title}
        status={props.items[0].status}
        date={props.items[0].date}
        />
         <ApplicationItem
        title={props.items[1].title}
        status={props.items[1].status}
        date={props.items[1].date}
        />
         <ApplicationItem
        title={props.items[2].title}
        status={props.items[2].status}
        date={props.items[2].date}
        />
         <ApplicationItem
        title={props.items[3].title}
        status={props.items[3].status}
        date={props.items[3].date}
        />
         <ApplicationItem
        title={props.items[4].title}
        status={props.items[4].status}
        date={props.items[4].date}
        />
    </div>
);
}

export default Application;