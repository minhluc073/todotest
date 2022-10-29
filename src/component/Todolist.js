import React, { useState } from "react";
import "./Todolist.css";
import { connect } from "react-redux";
import {
  addTaskAction,
  removeTaskAction,
} from "../redux/actions/ToDoListAction";
function Todolist(props) {
  const [state, setState] = useState({ taskName: "" });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      {/* <button onClick={() => { this.getTaskList() }}>Get task list</button> */}
      <div className="card">
        {/* <h2>hello!</h2> */}
        <div className="card__body">
          <div className="card__content">
            <div className="form-group">
              <div className="card__title">
                <h2>My Tasks</h2>
                {/* <p>September 9,2020</p> */}
              </div>
              <div className="card__add">
                <input
                  name="taskName"
                  onChange={(e) => {
                    setState({ taskName: e.target.value });
                  }}
                  id="newTask"
                  type="text"
                  placeholder="Enter an activity..."
                />

                <button
                  id="addItem"
                  onClick={() => {
                    //Lấy thông tin người dùng nhập vào từ input
                    let { taskName } = state;
                    //Tạo ra 1 task object
                    let newTask = {
                      id: Date.now(),
                      taskName: taskName,
                      done: false,
                    };

                    // console.log(newTask)
                    //Đưa task object lên redux thông qua phương thức dispatch

                    props.dispatch(addTaskAction(newTask));
                  }}
                >
                  <i className="fa fa-plus" />
                </button>
              </div>
            </div>

            <div className="card__todo form-group">
              {props.taskList.map((task, index) => {
                return (
                  <ul className="todo" id="completed">
                    <li key={index}>
                      <span>{task.taskName} </span>
                      <div className="buttons">
                        <button
                          className="remove"
                          onClick={() => {
                            props.dispatch(removeTaskAction(task.id));
                          }}
                        >
                          <i className="fa fa-trash-alt" />
                        </button>
                        {/* <button className="complete">
                          <i className="far fa-check-circle" />
                          <i className="fas fa-check-circle" />
                        </button> */}
                      </div>
                    </li>
                  </ul>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

const mapStateToProps = (state) => {
  return {
    taskList: state.ToDoListReducer.taskList,
  };
};
export default connect(mapStateToProps)(Todolist);
