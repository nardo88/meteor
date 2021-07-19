import React from 'react';

export const Task = ({ task, onCheckboxClick, onDeleteClick  }) => {

    return (
        <li>{task.text} <input type="checkbox" checked={!!task.isChecked} onClick={() => onCheckboxClick(task)} readOnly /> <button onClick={ () => onDeleteClick(task) }>&times;</button></li>
    )
};