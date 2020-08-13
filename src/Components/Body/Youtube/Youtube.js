import React, { Component } from "react";
// import './youtube.css';

//https://www.googleapis.com/youtube/v3/search?key=AIzaSyCkFpOgF-rTilwwQ0S0ihbEV2aQl1SJ39U&part=snippet,id&order=date&maxResults=2

class Youtube extends Component {
  constructor() {
    super();
    this.state = {
      youTubeVideos: [],
    };
  }
  //   componentDidMount() {
  //     fetch(
  //       "https://www.googleapis.com/youtube/v3/search?key=AIzaSyA6FU8ZC6dQcdlZoH80hNfi8ZvYMEfAbJY&part=snippet,id&order=date&maxResults=12"
  //     )
  //       .then((response) => response.json())
  //       .then((data) => {
  //         const dataVideos = data.items;
  //         this.setState((state) => {
  //           return {
  //             youTubeVideos: dataVideos,
  //           };
  //         });
  //       });
  //   }
  render() {
    return (
      <div className="allVideosWrapper">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper">
                Latest Videos <br />
                <br />
              </div>
            </div>
            {this.state.youTubeVideos.map((singleVideo, i) => {
              let vidId = singleVideo.id.videoId;
              let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
              let videoWrapper = (
                <div key={i} className="col-sm-12 col-md-6 col-lg-4">
                  <div className="singleVideoWrapper">
                    <div className="videoThumbnail">
                      <a
                        href={vidLink}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <img
                          src={singleVideo.snippet.thumbnails.high.url}
                          alt="video"
                        />
                      </a>
                    </div>
                    <div className="videoInfoWrapper">
                      <div className="videoTitle">
                        <a
                          href={vidLink}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          {singleVideo.snippet.title}
                        </a>
                      </div>
                      <div className="videoDesc">
                        {singleVideo.snippet.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
              return videoWrapper;
            })}

            {this.videoWrapper}
          </div>
        </div>
      </div>
    );
  }
}
export default Youtube;
