import React from 'react';
import { Typography } from '@material-ui/core';
import { IPostProps } from './Post.ias';

export default function Post(props: IPostProps) {
    console.log('PROPS', props)
    return(
        <>
            <Typography variant={"h1"} component={"h1"} children={props.title} />
            <Typography gutterBottom variant={"subtitle1"} component={"summary"} children={props.summary} />
        </>
    );
}