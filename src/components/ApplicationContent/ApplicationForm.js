import { useState } from 'react';

import './ApplicationForm.css';

const ApplicationForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // Setting Title
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  //Setting Date
  const dateChangeHanlder = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const applicationData = {
      title: enteredTitle,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(applicationData);
    //set to empty string to clear the input in forms
    setEnteredTitle('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-application__controls'>
        <div className='new-application__control'>
          <label>Comment</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-application__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2030-12-31'
            value={enteredDate}
            onChange={dateChangeHanlder}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Comment</button>
      </div>
    </form>
  );
};

export default ApplicationForm;
