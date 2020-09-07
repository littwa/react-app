import React from "react";
import { connect } from "react-redux";
import style from "../Detail/Detail.module.css";
import Fetch from "../../services/pixibayApi";

class DetailB extends React.Component {
 state = { picha: [] };
 // componentDidMount(){
 //   picha &&
 // }
 // static getDerivedStateFromProps(nextProps, prevState) {
 // console.log(22, nextProps);
 // let ggg = nextProps.extraProps ?
 // Fetch.FetchImgById(434918).then((data) => console.log(333, data));
 // return { picha: nextProps.extraProps };
 // }
 componentDidMount() {
  Fetch.FetchImgById(this.props.match.params.ImgId).then(data => this.setState({ picha: data.hits[0] }));
 }

 render() {
  console.log(22, this.props);
  let { picha } = this.state;
  let { extraProps } = this.props;

  let pichaX = extraProps.lengths > 0 ? extraProps : picha;

  return (
   pichaX && (
    <div className={style.content}>
     <img src={pichaX.webformatURL} alt="pic" />
     <p>Downloads: {pichaX.downloads}</p>
     <p>Likes: {pichaX.likes}</p>
     <p>User: {pichaX.user}</p>
     <p>Tags: {pichaX.tags}</p>
    </div>
   )
  );
 }
}

const mapStateToProps = state => ({ ss: state.red });

export default connect(mapStateToProps)(DetailB);

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
