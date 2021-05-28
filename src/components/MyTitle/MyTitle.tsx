import React from "react";

type MyTitlePropsType = {
    title: string
}
export function MyTitle(props: MyTitlePropsType) {
    console.log("MyTitle done")
    return <h1>{props.title}</h1>
}