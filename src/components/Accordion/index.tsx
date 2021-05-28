import React, { FC } from 'react';

import AccordionTitle from '../AccordionTitle';
import AccordionBody from '../AccordionBody';

interface IAccordionProps {
    collapsed: boolean;
    title: string;
}

const Accordion: FC<IAccordionProps> = ({ collapsed, title }) => (
    <>
        {collapsed ? (
            <>
                <AccordionTitle title={title} />
                <AccordionBody />
            </>
        ) : (
            <AccordionTitle title={title} />
        )}
    </>
);
export default Accordion;
