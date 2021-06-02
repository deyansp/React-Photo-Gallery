import React from "react";
import ReactDOM from "react-dom";

// stateful component
class App extends React.Component {
  state = {
    images: []
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
        <h1>Freshly Fetched Photos</h1>
        {this.state.images.map((image) => (
          <img
            key={image.id}
            src={`https://picsum.photos/200/300?image=${image.id}`}
          />
        ))}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);