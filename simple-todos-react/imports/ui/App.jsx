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
    <div>
      <h1>Welcome to Meteor!</h1>

      <TaskForm />

      <ul>
   
        {
          tasks.map(item => <Task key={item._id} task={item} onCheckboxClick={toggleChecked} onDeleteClick={deleteTask} />)
        }

      </ul>

    </div>
  )
}
