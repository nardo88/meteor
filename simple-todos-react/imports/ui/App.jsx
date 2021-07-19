import React from 'react';
import {Task} from './Task';
import { useTracker } from 'meteor/react-meteor-data';
import { TasksCollection } from '/imports/api/TasksCollection';
import {TaskForm} from './TaskForm'


export const App = () => {


  const tasks = useTracker(() => TasksCollection.find({}, { sort: { createdAt: -1 } }).fetch());

  // функция изменения статуса todo
  const toggleChecked = ({ _id, isChecked }) => {
    // обращаемся к коллекции и вызываем метод update
    // в качестве аргумента передаем id и объект
    TasksCollection.update(_id, {
      $set: {
        isChecked: !isChecked
      }
    })
  };


  // функция удаления todo обращаемся к коллекции и вызываем метод remove куда передаем id записи
  const deleteTask = ({ _id }) => TasksCollection.remove(_id);
  
  return (
      <div className="app">
        <header>
          <div className="app-bar">
            <div className="app-header">
              <h1>📝️ To Do List</h1>
            </div>
          </div>
        </header>
  
        <div className="main">
          <TaskForm />
  
          <ul className="tasks">
            {tasks.map(task => (
              <Task
                key={task._id}
                task={task}
                onCheckboxClick={toggleChecked}
                onDeleteClick={deleteTask}
              />
            ))}
          </ul>
        </div>
      </div>
  )
}
