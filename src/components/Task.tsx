import React from 'react'
import PropTypes from 'prop-types';


export default function Task({ task: { id, title , state}, onArchiveTask, onPinTask }:any) {
  return (
    <div className={`ist-item ${state}`}>
      <label className="checkbox">
        <input type='checkbox' defaultChecked={state == 'Task_Archieved'} disabled={true} name="checked" />
      </label>
      <span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
      <div className='title'>
        <input type='text' value={title} readOnly={true} placeholder='Input Title' />
      </div>
      <div className="actions" onClick={e => e.stopPropagation()}>
        {
          state !== 'Task_Archieved' && (
            <a onClick={() => onPinTask(id)}>
              <span className={`icon-star`} />
            </a>
          )}

      </div>
    </div>
  );
}

Task.prototype = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  onArchiveTask: PropTypes.func,
  onPinTask: PropTypes.func,
}