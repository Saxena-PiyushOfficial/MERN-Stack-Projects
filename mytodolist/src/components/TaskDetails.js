// TaskDetails.js
import React from 'react';

const TaskDetails = ({ taskList }) => {
  return (
    <div className='row'>
      <table className="table mt-4 ml-4 col-4">
        <thead>
          <tr>
            <th scope="col">Task Name</th>
            <th scope="col">Duration</th>
          </tr>
        </thead>
        <tbody>
          {taskList.map((task, index) => (
            <tr key={index}>
              <td>{task.name}</td>
              <td>{task.duration}</td>
            
            </tr>
          ))}
          
        </tbody>
      </table>
     
    </div>
  );
};

export default TaskDetails;
