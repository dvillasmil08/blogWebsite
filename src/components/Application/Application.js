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
        description={props.items[0].description}
        />
         <ApplicationItem
        title={props.items[1].title}
        status={props.items[1].status}
        date={props.items[1].date}
        description={props.items[1].description}
        />
         <ApplicationItem
        title={props.items[2].title}
        status={props.items[2].status}
        date={props.items[2].date}
        description={props.items[2].description}
        />
         <ApplicationItem
        title={props.items[3].title}
        status={props.items[3].status}
        date={props.items[3].date}
        description={props.items[3].description}
        />
         <ApplicationItem
        title={props.items[4].title}
        status={props.items[4].status}
        date={props.items[4].date}
        description={props.items[4].description}
        />
    </div>
);
}

export default Application;