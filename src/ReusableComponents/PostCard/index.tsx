import React from 'react';
import PostCardStyles, {IPostCardProps} from './PostCard.ias';
import Card from '@material-ui/core/Card';
import { CardActions, CardContent, CardMedia, Chip, IconButton, Typography } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import postCardStyles from './PostCard.ias';

export default function PostCard(props: IPostCardProps) {
  const styles = postCardStyles();
  return (
    <Card
      arial-label={"blog-post-card"}
      className={styles.cardWrapper}
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
        <Typography gutterBottom variant={"caption"} color={"textSecondary"} component={"p"}>
            {props.date}
        </Typography>
        <Typography variant={"body2"} color={"textPrimary"} component={"p"}>
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