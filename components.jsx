import styled from "@emotion/styled";

export const Header = styled("header")({
  padding: 16,
  backgroundColor: "#f5f5f5"
});

// images grid
export const ImgTiles = styled("div")((props) => ({
  display: "grid",
  padding: props.spacing,
  gridGap: props.spacing,

  /* fill the viewport with as many images as possible, while maintaining the minCellWidth */
  gridTemplateColumns: `repeat(auto-fill, minmax(${props.minCellWidth}px, 1fr))`
}));

ImgTiles.defaultProps = {
  spacing: 16,
  minCellWidth: 120
};

const ThumbnailStyles = {
  display: "block",
  width: "100%",
  objectFit: "cover"
}

const FullScreenStyles = {
    position: "fixed",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    height: "80vh",
    margin: "auto"
}
export const Img = styled("img")(props => props.isActive ? FullScreenStyles : ThumbnailStyles);