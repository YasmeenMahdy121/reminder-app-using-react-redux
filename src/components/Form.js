import { useState } from "react";
import DatePicker from "react-datepicker";
import { connect } from "react-redux";
import { add_reminder } from "./ActionGenerator";
import "react-datepicker/dist/react-datepicker.css";
import "./Form.scss";
const Form = (props) => {
  // using useState hook to handle text and date inputs
  const [text, setText] = useState("");
  const [date, setDate] = useState(new Date());
  // function of change input of the text
  const changeInputText = (e) => {
    setText(e.target.value);
  };
  // function of change input of the date
  const handleDateChange = (date) => {
    setDate(date);
  };
  // submit function to add the reminder to the list
  const addReminder = (e) => {
    e.preventDefault();
    // add action
    props.add_reminder({ text: text, date: date, id: Math.random() });
    setText("");
  };

  return (
    <form
      className="d-flex align-items-start row g-2 mt-2"
      onSubmit={addReminder}
    >
      <div className="col-md-4 ">
        <input
          className="text"
          type="text"
          placeholder="I have to..."
          onChange={changeInputText}
          value={text}
        />
      </div>
      <div className="col-md-6">
        <DatePicker
          selected={date}
          onChange={handleDateChange}
          showTimeSelect
          timeFormat="HH:MM"
          dateFormat="MM/dd/yyyy hh:mm aa"
          wrapperClassName="datePicker"
        />
      </div>
      <div className="col-md-2 ">
        <button type="submit" disabled={!text} className="btn btn-success w-100">
          Add this
        </button>
      </div>
    </form>
  );
};

export default connect(null, { add_reminder })(Form);
