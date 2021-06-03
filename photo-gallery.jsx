import React from "react";
import ReactDOM from "react-dom";
import { Header, ImgTiles, Img, ImgFrame } from "./components";

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
          <h1>📷 Freshly Fetched Photos 📷</h1>
        </Header>
        <ImgTiles>
          {this.state.images.map((image) => {
            const isActive = this.state.currentPhotoId === image.id;
            return (
              <Img
                key={image.id}
                src={`https://picsum.photos/1000/1000?image=${image.id}`}
                isActive={isActive}
                // update state with the currently clicked image's ID or set to null to close full screen view
                onClick={() =>
                  this.setState({ currentPhotoId: isActive ? null : image.id })
                }
              />
            );
          })}
        </ImgTiles>
        
        // if the current image is clicked, add a background to the full
        // screen view
        {this.state.currentPhotoId !== null && <ImgFrame />}
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);