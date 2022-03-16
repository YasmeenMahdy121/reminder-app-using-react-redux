import Form from "./components/Form";
import Reminder from "./components/Reminder";
import { clear_reminder } from "./components/ActionGenerator";
import "./App.scss";
import { connect } from "react-redux";

const App = (props) => {
  return (
    <div className="App container d-flex flex-column">
      <h1 className="text-center">Reminder Pro</h1>
      {/* form to add reminder */}
      <Form />
      {/* all reminders */}
      <ul className="list-group mt-2">
        {props.reminders.map((reminder) => {
          return <Reminder reminder={reminder} key={reminder.id} />;
        })}
      </ul>
      {/* clear reminders button */}
      {props.reminders.length > 1 ? (
        <button className="btn btn-danger mt-3" onClick={props.clear_reminder}>
          Clear All
        </button>
      ) : (
        ""
      )}
    </div>
  );
};
function MapStateToProps(state) {
  return {
    reminders: state,
  };
}
// function MapDispatchToProps(dispatch){
//   return{
//     clear_reminder:() = dispatch(clear_reminder)
//   }
// }
export default connect(MapStateToProps, { clear_reminder })(App);
