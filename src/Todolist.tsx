import React, { ChangeEvent, FC, KeyboardEvent, useState } from 'react';
import { FilterValuesType } from './App';

type TaskType = {
    id: string;
    title: string;
    isDone: boolean;
};

type PropsType = {
    title: string;
    tasks: Array<TaskType>;
    removeTask: (taskId: string) => void;
    changeFilter: (value: FilterValuesType) => void;
    addTask: (title: string) => void;
    isDoneChange: (id: string) => void;
    filter: FilterValuesType;
};

const Todolist: FC<PropsType> = ({
    title,
    tasks,
    removeTask,
    changeFilter,
    addTask,
    isDoneChange,
    filter,
}) => {
    let [inputText, setInputText] = useState('');

    let [error, setError] = useState<null | string>(null);

    const addTasked = () => {
        if (inputText.trim() !== '') {
            addTask(inputText.trim());
        } else {
            setError('title is required');
        }
        setInputText('');
    };

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputText(e.currentTarget.value);
    };

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.key === 'Enter') {
            addTasked();
        }
    };

    const onAllClickHandler = () => changeFilter('all');
    const onActiveClickHandler = () => changeFilter('active');
    const onCompletedClickHandler = () => changeFilter('completed');

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input
                    value={inputText}
                    className={error ? 'error' : ''}
                    onChange={onChangeHandler}
                    onKeyPress={onKeyPressHandler}
                />
                <button onClick={addTasked}>+</button>
            </div>
            {error && <p className="error-message">{error}</p>}
            <ul>
                {tasks.map((t) => {
                    const onClickHandler = () => removeTask(t.id);

                    const isDoneHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        isDoneChange(t.id);
                    };

                    return (
                        <li key={t.id}>
                            <input type="checkbox" checked={t.isDone} onChange={isDoneHandler} />
                            <span>{t.title}</span>
                            <button onClick={onClickHandler}>x</button>
                        </li>
                    );
                })}
            </ul>
            <div>
                <button
                    className={filter === 'all' ? 'active-filter' : ''}
                    onClick={onAllClickHandler}
                >
                    All
                </button>
                <button
                    className={filter === 'active' ? 'active-filter' : ''}
                    onClick={onActiveClickHandler}
                >
                    Active
                </button>
                <button
                    className={filter === 'completed' ? 'active-filter' : ''}
                    onClick={onCompletedClickHandler}
                >
                    Completed
                </button>
            </div>
        </div>
    );
};
export default Todolist;
