import moment from "moment";
import React from "react";
import { connect } from "react-redux";
import { remove_reminder } from "./ActionGenerator";
const Reminder = (props) => {
  // distruct reminder
  const { text, date, id } = props.reminder;
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <p className="mb-0">{text}</p>
        <i className="text-muted" style={{ fontSize: "13px" }}>
          {moment(new Date(date)).fromNow()}
        </i>
      </div>
      <span
        className="badge bg-danger p-2"
        style={{cursor:"pointer"}}
        onClick={() => props.remove_reminder(id)}
      >
        X
      </span>
    </li>
  );
};

export default connect(null, { remove_reminder })(Reminder);
