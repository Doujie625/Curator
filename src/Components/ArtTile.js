const ArtTile = (props) => {
  if (props.art.image_id) {
    return (
      <div key={props.art.id} className="component_element">
        <div className="search_item">
          <div className="image">
            <img
              src={`https://www.artic.edu/iiif/2/${props.art.image_id}/full/400,/0/default.jpg`}
              alt=""
            />
          </div>
          <div className="plaque" onClick={() => props.addToGallery(props.art)}>
            <h4>{props.art.artist}</h4>
            <h4>{props.art.origin}</h4>
            <h4>{props.art.art_type}</h4>
            <a onClick={() => props.addToGallery(props.art)}>Add to Gallery</a>
          </div>
        </div>
      </div>
    );
  } else {
    return;
  }
};

export default ArtTile;
