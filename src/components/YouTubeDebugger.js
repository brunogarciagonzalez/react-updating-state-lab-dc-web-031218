// Code YouTubeDebugger Component Here
import React from "react";

class YouTubeDebugger extends React.Component {
  constructor() {
    super();

    this.state = {
      errors: [],
      user: null,
      settings: { bitrate: 8, video: { resolution: "1080p" } }
    };
  }

  bitrateHandler = () => {
    // changes the settings.bitrate state property to 12
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    });
  };

  resolutionHandler = () => {
    // changes the settings.video.resolution state property to '720p'
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: "720p"
        }
      }
    });
  };

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.bitrateHandler}>
          Bitrate
        </button>
        <button className="resolution" onClick={this.resolutionHandler}>
          Resolution
        </button>
      </div>
    );
  }
}

export default YouTubeDebugger;
