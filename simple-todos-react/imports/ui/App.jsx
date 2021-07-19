import React from 'react';
import {Task} from './Task';
import { useTracker } from 'meteor/react-meteor-data';
import { TasksCollection } from '/imports/api/TasksCollection';
import {TaskForm} from './TaskForm'


export const App = () => {


  const tasks = useTracker(() => TasksCollection.find({}, { sort: { createdAt: -1 } }).fetch());
  
  return (
    <div>
      <h1>Welcome to Meteor!</h1>

      <TaskForm />

      <ul>
   
        {
          tasks.map(item => <Task key={item._id} task={item} />)
        }

      </ul>

    </div>
  )
}
