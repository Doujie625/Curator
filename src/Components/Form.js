import React, { useEffect, useState } from "react";
import ArtTile from "./ArtTile"

function Form(props) {
    const [searchTerm, setSearchTerm] = useState("") //What is searched for
    const [selection, setSelection] = useState({})
    const [secondFetch, setSecondFetch] = useState([]) // An object made from the second fetch call with important details for each object
    
    useEffect(() => {
        console.log('render')
    }, [searchTerm])

    const updateSearchTerm = (event) => {
        setSearchTerm(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        setSearchTerm("")

        API(searchTerm).then(data => {
            const copy = [];
            const copyTwo = []
            for (let i = 0; i < 10; i++){
                const obj = {
                    id: data.data[i].id,
                    title: data.data[i].title,
                }
                copy.push(obj);
                let term = data.data[i].id;
                SecondCall(term).then(info => {
                    const objTwo = {
                        id: info.data.id,
                        artist: info.data.artist_title,
                        artist_date: "",
                        origin: info.data.place_of_origin,
                        art_type: info.data.artwork_type_title,
                        image_id: info.data.image_id,
                        date_display: info.data.date_display,
                        desc: info.data.medium_display,
                        credit: info.data.credit_line,
                    }
                    copyTwo.push(objTwo)
                    setSecondFetch(copyTwo)
                })
            }
        })
        setSearchTerm("")

    }
    async function API(url){
        setSearchTerm("")
        const baseUrl = 'https://api.artic.edu/api/v1/artworks/search?q=';
        const response = await fetch(baseUrl + url);
        const data = await response.json();
        return data;
    }
    async function SecondCall(id){
        const secondUrl = 'https://api.artic.edu/api/v1/artworks/'
        const response = await fetch(secondUrl + id);
        const info = await response.json();
        return info
    }
    const addToGallery = (e) => {
        const tempArray = [...props.gallery]
        tempArray.push(e)
        props.setGallery(tempArray)
    }

    const secondDisplay = secondFetch.map((item) => {
        return <ArtTile art={item} addToGallery={addToGallery}/>
    })

    return (
        <div className="Form">
            <main>
            <h3>Form</h3>
            <form onSubmit={handleSubmit}>
                <input onChange={updateSearchTerm} value={searchTerm} type="text" placeholer="Search" />
                <input type="submit" value="Find Art"/>
            </form>
            {secondDisplay}
            </main>
        </div>
    )
}

export default Form;