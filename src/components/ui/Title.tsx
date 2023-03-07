import React, { ReactComponentElement, ReactNode } from 'react';

function Title(props: {children?: ReactNode, title: string}) {
    return (
        <h2>{props.children} {props.title}</h2>
    );
}

export default Title;