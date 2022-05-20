
const Gallery = (props) => {
    console.log(props)

    const galleryArr = props.gallery.map((thing) => {
        if (thing.image_id) {
            return (
                <ul key={thing.id} className="true">
                    <img
                        src={`https://www.artic.edu/iiif/2/${thing.image_id}/full/400,/0/default.jpg`}
                        alt=""
                    />
                    <li>{thing.artist}</li>
                    <li>{thing.origin}</li>
                    <li>{thing.art_type}</li>
                    <button onClick={() => removeItem()}>Remove</button>
                    </ul>
            );
        } else {
            return
        }
    })

    const removeItem = () => {
        console.log("hello")
    }

    return (
        <div className="Gallery">
            <main>
                <h1>Gallery</h1>
                {galleryArr}
            </main>
        </div>
    )
}

export default Gallery;