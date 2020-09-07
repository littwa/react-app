import React from "react";
import style from "../Detail/Detail.module.css";
import Fetch from "../../services/pixibayApi";

class Detail extends React.Component {
  // state = { picha: [] };
  // // componentDidMount(){
  // //   this.props.extraProps &&
  // // }
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log(22, nextProps);
  //   // let ggg = nextProps.extraProps ?
  //   // Fetch.FetchImgById(434918).then((data) => console.log(333, data));
  //   return { picha: nextProps.extraProps };
  // }

  render() {
    return (
      this.props.extraProps && (
        <div className={style.content}>
          <img src={this.props.extraProps.webformatURL} alt="pic" />
          <p>Downloads: {this.props.extraProps.downloads}</p>
          <p>Likes: {this.props.extraProps.likes}</p>
          <p>User: {this.props.extraProps.user}</p>
          <p>Tags: {this.props.extraProps.tags}</p>
        </div>
      )
    );
  }
}

export default Detail;

// comments: 250
// downloads: 274278
// favorites: 1755
// id: 434918
// imageHeight: 1453
// imageSize: 587598
// imageWidth: 2165
// largeImageURL: "https://pixabay.com/get/52e3d14a4b5ab108f5d08460962931791438d8ec514c704c7c277ad2944fc65d_1280.jpg"
// likes: 1425
// pageURL: "https://pixabay.com/photos/legs-window-car-dirt-road-relax-434918/"
// previewHeight: 100
// previewURL: "https://cdn.pixabay.com/photo/2014/09/03/20/15/legs-434918_150.jpg"
// previewWidth: 150
// tags: "legs, window, car"
// type: "photo"
// user: "Greyerbaby"
// userImageURL: "https://cdn.pixabay.com/user/2014/11/14/05-39-07-629_250x250.jpg"
// user_id: 2323
// views: 645633
// webformatHeight: 429
// webformatURL: "https://pixabay.com/get/52e3d14a4b5ab10ff3d8992cc62e307f1239d7e74e5074407d2e7dd7954ec0_640.jpg"
// webformatWidth: 640