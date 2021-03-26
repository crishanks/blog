import React from 'react';
import {IPostCardProps} from './PostCard.ias';
import Card from '@material-ui/core/Card';
import { CardActions, CardContent, CardMedia, Chip, Typography } from '@material-ui/core';

export default function PostCard(props: IPostCardProps) {
  return (
    <Card
      arial-label={"blog-post-card"}
    >
      <CardMedia 
        image={props.imageUrl}
        title={props.imageTitle}
      />
      <CardContent>
        {props.labels && (
          <div>
            {props.labels.map((label) => {
              return (
                <Chip label={label.text}/>
              );
            })}
          </div>
        )}
      <Typography gutterBottom variant={"h5"} color={"textPrimary"} component={"h2"}>
          {props.title}
        </Typography>
        <Typography variant={"body2"} color={"textSecondary"} component={"p"}>
          {props.summary}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="share">
          <ShareIcon /> 
          {/* add drop down for share options for twitter, linkedIn, Facebook, Instagram... */}
        </IconButton>
      </CardActions>
    </Card>
  );
}