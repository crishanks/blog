import React, { useState } from 'react';
import postCardStyles, {IPostCardProps} from './PostCard.ias';
import Card from '@material-ui/core/Card';
import { CardActions, CardContent, CardMedia, Chip, IconButton, Typography } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import { Link, useHistory } from 'react-router-dom';

export default function PostCard(props: IPostCardProps) {
  const styles = postCardStyles();
  const history = useHistory();
  const navigate = () => (history.push(props.title));

  const [cardHovered, setCardHovered] = useState(false);

  return (
    <Card
      arial-label={"blog-post-card"}
      className={styles.cardWrapper}
      classes={{
        root: cardHovered ? styles.hovered : "",
      }}
      onMouseEnter={() => setCardHovered(true)}
      onMouseLeave={() => setCardHovered(false)}
      onClick={navigate}
    >
      {props.imageUrl && (
        <CardMedia 
          image={props.imageUrl}
          title={props.imageTitle}
        />
      )}
      <CardContent className={styles.cardContent}>
        {props.labels && (
          <div>
            {props.labels.map((label) => {
              return (
                <Chip label={label.text}/>
              );
            })}
          </div>
        )}
        <Typography gutterBottom variant={"h5"} component={"h2"}>
            {props.title}
        </Typography>
        <Typography gutterBottom variant={"caption"} color={"textSecondary"} component={"p"}>
            {props.date}
        </Typography>
        <Typography variant={"body2"} component={"p"}>
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