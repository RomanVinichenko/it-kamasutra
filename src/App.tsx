import React, { FC, useState } from 'react';
import { v1 } from 'uuid';
import Todolist from './Todolist';

import './App.css';

export type FilterValuesType = 'all' | 'active' | 'completed';

const App: FC = () => {
    let [tasks, setTasks] = useState([
        { id: v1(), title: 'HTML&CSS', isDone: true },
        { id: v1(), title: 'JS', isDone: true },
        { id: v1(), title: 'ReactJS', isDone: false },
        { id: v1(), title: 'Rest API', isDone: false },
        { id: v1(), title: 'GraphQL', isDone: false },
    ]);

    const removeTask = (id: string) => {
        let filteredTasks = tasks.filter((t) => t.id !== id);
        setTasks(filteredTasks);
    };

    const addTask = (title: string) => {
        let task = { id: v1(), title: title, isDone: false };
        let newTasks = [task, ...tasks];
        setTasks(newTasks);
    };

    let [filter, setFilter] = useState<FilterValuesType>('all');

    let tasksForTodolist = tasks;

    if (filter === 'active') {
        tasksForTodolist = tasks.filter((t) => !t.isDone);
    }
    if (filter === 'completed') {
        tasksForTodolist = tasks.filter((t) => t.isDone);
    }

    const changeFilter = (value: FilterValuesType) => {
        setFilter(value);
    };

    const isDoneChange = (id: string) => {
        let currentTask = tasks.find((item) => item.id === id);
        if (currentTask) {
            currentTask.isDone = !currentTask.isDone;
            setTasks([...tasks]);
        }
    };

    return (
        <div className="App">
            <Todolist
                title="What to learn"
                tasks={tasksForTodolist}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask}
                isDoneChange={isDoneChange}
                filter={filter}
            />
        </div>
    );
};

export default App;
