import axios from 'axios'
import React,{ useState } from 'react'
import GifCard from './GifCard'
export default function SearchField() {
    const [Results, setResults] = useState()
    async function search(){
        const input = document.getElementById('input').value
        if(input.length != 0){
        await axios.get(`http://api.giphy.com/v1/gifs/search?q=${input}&api_key=6nm9q7cNwt2dMkVdxrP4HeDkjw8dcVOt`)
        .then(response =>{
            setResults(response.data.data[1].images.original.url)
            console.log(response.data.data[1].images.original.url)
        })}
    }//response.data.data.images.original.url

// http://api.giphy.com/v1/gifs/random?api_key=6nm9q7cNwt2dMkVdxrP4HeDkjw8dcVOt
// Use this link to help with axios https://www.freecodecamp.org/news/how-to-use-axios-with-react/#how-to-make-a-get-request
    return (
        <div>
            <input type="text" id = "input"></input>
            <button type="button" className="btn btn-primary" onClick={search}>Search</button>
            <div>
            <img src = {Results}></img>
            </div>
        </div>
    )
}
