import React from 'react';

type AccordionPropsType = {
    collapsed: boolean;
};

function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle />
            <AccordionBody />
        </div>
    );
}

type AccordionTitlePropsType = {
    collapsed: boolean;
};

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccTitle re');
    return <h1>{props.collapsed}</h1>;
}

type AccordionBodyPropsType = {
    title: string;
};

function AccordionBody() {
    console.log('AccBody re');
    return (
        <ul>
            Acc body
            <li>1</li>
            <li>1</li>
        </ul>
    );
}

export default Accordion;
