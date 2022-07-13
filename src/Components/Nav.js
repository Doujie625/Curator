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
        <Link to="/"><span className='Curator' id="nav_icons">Curate</span></Link>
        <Link to="/gallery"><span className='Gallery' id="nav_icons">My Gallery</span> </Link>
        <Link to="/about"><span className='About' id="nav_icons">About</span> </Link>
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