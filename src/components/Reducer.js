import { bake_cookie, read_cookie } from "sfcookies";
// reducer to handle actions
const reduser = (state = [], action) => {
  let reminders = read_cookie("reminders");
  // if make action to add reminder
  if (action.type === "add") {
    reminders = [...state, action.reminder];
    bake_cookie("reminders", reminders);
    return reminders;
  }
  // if make action to remove reminder
  else if (action.type === "remove") {
    reminders = state.filter((reminder) => reminder.id !== action.id);
    bake_cookie("reminders", reminders);
    return reminders;
  }
  // if make action to clear all reminders
  else if (action.type === "clear") {
    reminders = [];
    bake_cookie("reminders", reminders);
    return reminders;
  } else {
    return reminders;
  }
};

export default reduser;
