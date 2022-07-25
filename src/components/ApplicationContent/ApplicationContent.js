import './ApplicationContent.css';

const ApplicationContent = (props) => {
  return (
    <div className='applicationSection'>
      <div className='applicationView-item'>
        <div className='applicationView-item__description'>
          {/* <ApplicationDate date={props.date} /> */}
          <h2>Title{props.title}</h2>
          <p>Descripton{props.decription}</p>
          <div className='applicationView-item__status'>
            Status{props.status}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
export default ApplicationContent;
