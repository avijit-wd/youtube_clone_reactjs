import React from "react";
import { Avatar } from "@material-ui/core";
import "./VideoCard.css";

const VideoCard = ({
  image,
  title,
  channel,
  timestamp,
  channelImage,
  views,
}) => {
  return (
    <div className="videoCard">
      <img className="videoCard__image" src={image} alt="" />
      <div className="videoCard__info">
        <Avatar
          className="videoCard__avatar"
          src={channelImage}
          alt={channel}
        />
        <div className="videoCard__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} . {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
