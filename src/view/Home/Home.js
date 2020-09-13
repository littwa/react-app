import React from "react";
import style from "./Home.module.css";
import Fetch from "../../services/pixibayApi";
import PicContainer from "../../components/PicContainer/PicContainer";
import PicItem from "../../components/PicItem/PicItem";

class Home extends React.Component {
 state = {
  pictures: []
 };

  componentDidMount() {
    Fetch.FetchImages().then((data) => {
      this.setState({ pictures: data.hits });
      // this.props.onChangPic(data.hits);
    });
  }
  render() {
    return (
      <div className={style.content}>
        {this.state.pictures && (
          <PicContainer>
            <PicItem onCh={this.props.onChangPic} location={this.props.location} pictures={this.state.pictures} />
          </PicContainer>
        )}{" "}
      </div>
    );
  }
}

export default Home;

// comments: 250
// downloads: 273634
// favorites: 1753
// id: 434918
// imageHeight: 1453
// imageSize: 587598
// imageWidth: 2165
// largeImageURL: "https://pixabay.com/get/52e3d14a4b5ab108f5d08460962931791438d8ec514c704c7c277bd7904cc25e_1280.jpg"
// likes: 1423
// pageURL: "https://pixabay.com/photos/legs-window-car-dirt-road-relax-434918/"
// previewHeight: 100
// previewURL: "https://cdn.pixabay.com/photo/2014/09/03/20/15/legs-434918_150.jpg"
// previewWidth: 150
// tags: "legs, window, car"
// type: "photo"
// user: "Greyerbaby"
// userImageURL: "https://cdn.pixabay.com/user/2014/11/14/05-39-07-629_250x250.jpg"
// user_id: 2323
// views: 644615
// webformatHeight: 429
// webformatURL: "https://pixabay.com/get/52e3d14a4b5ab10ff3d8992cc62e307f1239d7e74e5074407d2f78d3964ac3_640.jpg"
// webformatWidth: 640
