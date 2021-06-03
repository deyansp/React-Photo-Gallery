import React from "react";
import ReactDOM from "react-dom";
import { Header, ImgTiles, Img } from "./components";

import "./styles.css";

class App extends React.Component {
  state = {
    images: [],
    currentPhotoId: null
  };

  // get data when the components mounts to the screen
  componentDidMount() {
    fetch("https://picsum.photos/v2/list")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          images: data.slice(0, 30)
        });
      });
  }

  render() {
    return (
      <div>
        <Header>
          <h1>Freshly Fetched Photos</h1>
        </Header>
        <ImgTiles>
          {this.state.images.map((image) => (
            <Img
              key={image.id}
              src={`https://picsum.photos/1000/1000?image=${image.id}`}
              isActive={this.state.currentPhotoId === image.id}
              // update state with the currently clicked image's ID
              onClick={() => this.setState({ currentPhotoId: image.id })}
            />
          ))}
        </ImgTiles>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);