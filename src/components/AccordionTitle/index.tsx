import React, { FC } from 'react';

interface IAccordionTitleProps {
    title: string;
}

const AccordionTitle: FC<IAccordionTitleProps> = ({ title }) => {
    return <h1>{title}</h1>;
};

export default AccordionTitle;
