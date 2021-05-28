import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {MyTitle as Mt} from "./components/MyTitle/MyTitle";
import {Rating, Star} from "./components/Star/Rating";

function App() {
    console.log("app rendered")
    return (
        <div>
            <Accordion collapsed={true}/>
            <Accordion collapsed={false}/>
        </div>
    )
}

// const task1=[
//     {id:1,title:'HTML&CSS',isDone:true},
//     {id:'1' ,title:'HTML&CSS2',isDone:false},
//     {id:1,title:'HTML&CSS3',isDone:true},
// ];
// const task2=[
//     {id:1,title:'HTML&CSS',isDone:true},
//     {id:'1' ,title:'HTML&CSS2',isDone:false},
//     {id:1,title:'HTML&CSS3',isDone:true},
// ]
//
// return (
//     <div>
//         <Todolist title={'What to learn'} tasks={task1}/>
//         <Todolist title={'What to university'} tasks={task1}/>
//     </div>
// );

export default App;
