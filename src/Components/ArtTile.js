const ArtTile = (props) => {
  console.log()
  if (props.art.data.image_id) {
    return (
      <div key={props.art.data.id} className="component_element">
        <div className="search_item">
          <div className="image">
            <img
              src={`https://www.artic.edu/iiif/2/${props.art.data.image_id}/full/400,/0/default.jpg`}
              alt=""
            />
          </div>
          <div className="plaque" onClick={() => props.addToGallery(props.art.data)}>
            <h4>{props.art.data.artist_title}</h4>
            <h4>{props.art.data.place_of_origin}</h4>
            <h4>{props.art.data.artwork_type_title}</h4>
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
