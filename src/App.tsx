import React, { useState } from 'react';
import './App.css';
import { Todolist } from './components/Todolist/Todolist';


function App() {

    // let tasks1 = [
    //     { id: 1, title: "HTML&CSS", isDone: true },
    //     { id: 2, title: "JS", isDone: true },
    //     { id: 3, title: "ReactJS", isDone: false },
    //     { id: 4, title: "HTML&CSS", isDone: true },
    //     { id: 5, title: "JS", isDone: true },
    //     { id: 6, title: "ReactJS", isDone: false },
    // ]

    let [tasks1,setTasks1]=useState ([
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false },
        { id: 4, title: "HTML&CSS", isDone: true },
        { id: 5, title: "JS", isDone: true },
        { id: 6, title: "ReactJS", isDone: false },
    ])


    const removeTasks=(Mid:number) => {
        tasks1 = tasks1.filter(f=>f.id!==Mid);
        setTasks1(tasks1)
        console.log(tasks1);
    }

    return (
        <div className="App">
            <Todolist
                title="What to learn"
                tasks={tasks1}
                removeTasks={removeTasks}
            />
        </div>
    );
}

export default App;



// import { MyTitle as Mt } from './components/MyTitle/MyTitle';
// import { Rating, Star } from './components/Star/Rating';
// import Accordion from './components/Accordion';

// return (
//     <div>
//         <Accordion collapsed={true} title={'hello world'} />
//         <Accordion collapsed={false} title={'hello world'} />
//     </div>
// );


