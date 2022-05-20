import { Routes, Route, Link } from "react-router-dom";
import Curator from "./Curator";
import Gallery from "./Gallery";
import About from "./About";
import { useState } from "react"

function Nav(item) {
  const [gallery, setGallery] = useState([])

  return (
    <div className="App">
      <nav className='nav'>
        <Link to="/"><span className='Curator'>Curate</span></Link>
        <Link to="/gallery"><span className='Gallery'>My Gallery</span> </Link>
        <Link to="/about"><span className='About'>About</span> </Link>
      </nav>
      <main>
      <Routes>
        <Route path="/" element={<Curator 
          gallery={gallery}
          setGallery={setGallery}
               />} />
        <Route path="/gallery" id={item.id} element={<Gallery 
          gallery={gallery}
          setGallery={setGallery}
        />} />
        <Route path="/about" element={<About />}/>
      </Routes>
      </main>
    </div>
  );
}

export default Nav;