import React, { Component } from 'react';

export default class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: "",
      taskDuration: 0,
    };
  }

  render() {
    return (
      <div>
        <form
          className='row'
          onSubmit={(e) => {
            e.preventDefault();
            this.props.addItem(this.state.taskName, this.state.taskDuration);
          }}
        >
          <div className='mb-3 col-6'>
            <label htmlFor='inputName' className='form-label'>
              Task Name:
            </label>
            <input
              type='text'
              className='form-control'
              id='inputName'
              aria-describedby='name'
              name='taskName'
              onChange={(e) => {
                this.setState({ taskName: e.currentTarget.value });
              }}
              value={this.state.taskName}
            />
          </div>
          <div className='mb-3 col-6'>
            <label htmlFor='inputDur' className='form-label'>
              Task Duration:
            </label>
            <input
              type='text'
              className='form-control'
              id='dur'
              name='dur'
              onChange={(e) => {
                this.setState({ taskDuration: parseInt(e.currentTarget.value) });
              }}
              value={this.state.taskDuration}
            />
          </div>

          <button type='submit' className='btn btn-primary col-12'>
            Add
          </button>
        
        </form>
      </div>
    );
  }
}
