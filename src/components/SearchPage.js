import React from "react";
import "./SearchPage.css";
import TuneIcon from "@material-ui/icons/Tune";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneIcon />
        <h2>Filter</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://media-exp1.licdn.com/dms/image/C560BAQF1yoJJAGZAgQ/company-logo_200_200/0?e=2159024400&v=beta&t=1ej3N6iuq83FGGmPv8OVFZNRueV62Y8BaKB4Ecy9qNs"
        channel="Clever Programmer"
        verified
        subs="659k"
        noOfVideos={380}
        description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
      />
      <hr />
      <VideoRow
        views="1.4M"
        subs="659k"
        description="Do you want a free web dev tip"
        channel="Clever Programmer"
        title="Lets build a Youtube clone"
        image="https://i.ytimg.com/vi/g8yGxDMyGiE/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBD7kzTYcK5h4mmuiiGudZ6AFJFqQ"
        timestamp="59 minutes ago"
      />
      <VideoRow
        views="1.4M"
        subs="659k"
        description="Do you want a free web dev tip"
        channel="Clever Programmer"
        title="Lets build a Youtube clone"
        image="https://i.ytimg.com/vi/g8yGxDMyGiE/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBD7kzTYcK5h4mmuiiGudZ6AFJFqQ"
        timestamp="59 minutes ago"
      />
      <VideoRow
        views="1.4M"
        subs="659k"
        description="Do you want a free web dev tip"
        channel="Clever Programmer"
        title="Lets build a Youtube clone"
        image="https://i.ytimg.com/vi/g8yGxDMyGiE/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBD7kzTYcK5h4mmuiiGudZ6AFJFqQ"
        timestamp="59 minutes ago"
      />
      <VideoRow
        views="1.4M"
        subs="659k"
        description="Do you want a free web dev tip"
        channel="Clever Programmer"
        title="Lets build a Youtube clone"
        image="https://i.ytimg.com/vi/g8yGxDMyGiE/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBD7kzTYcK5h4mmuiiGudZ6AFJFqQ"
        timestamp="59 minutes ago"
      />
    </div>
  );
};

export default SearchPage;
