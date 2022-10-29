import { add_task, del_task } from "../types/ToDoListType";
const initialState = {
  taskList: [
    { id: 1, taskName: "task 1" },
    { id: 2, taskName: "task 2" },
    { id: 3, taskName: "task 3" },
    { id: 4, taskName: "task 4" },
    { id: 5, taskName: "task 5" }
  ],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case add_task: {
      // console.log('todo',action.newTask)
      //Kiểm tra rổng
      if (action.newTask.taskName.trim() === "") {
        alert("Task name is required!");
        return { ...state };
      }
      //Kiểm tra tồn tại
      let taskListUpdate = [...state.taskList];
      let index = taskListUpdate.findIndex(
        (task) => task.taskName === action.newTask.taskName
      );
      if (index !== -1) {
        alert("task name already exists !");
        return { ...state };
      }

      taskListUpdate.push(action.newTask);

      //Xử lý xong thì gán taskList mới vào taskList
      state.taskList = taskListUpdate;
      
      return { ...state };

    }
    case del_task:{
      let taskListUpdate = [...state.taskList];
      //gán lại mảng moi chứa tasklot bị 
      taskListUpdate = taskListUpdate.filter(task => task.id !== action.taskId);
      
      return {...state, taskList:taskListUpdate}

    }
    default:
      return { ...state };
  }
};
