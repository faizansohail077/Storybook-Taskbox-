import React from 'react';
import Task from './Task';



export default {
  title: 'Task',
  component: Task
}

const Template: any = (args:any)  => <Task {...args}/>;
export const Default = Template.bind({})

Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'Task_Inbox',
    updateAt:new Date(2020,0,1,12,0)
  }
}

export const Pinned = Template.bind({})
Pinned.args = {
  ...Default.args.task,
  state: 'Task_Pinned'
}


export const Archieved = Template.bind({})

Archieved.args = {
  task: {
    ...Default.args.task,
    state: 'Task Archieved'
  }
}