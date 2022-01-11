import axios from 'axios'
import React,{ useState } from 'react'
import GifCard from './GifCard'
export default function SearchField() {
    const [Results, setResults] = useState()
    async function Getrandom(){
        await axios.get(`http://api.giphy.com/v1/gifs/random?api_key=6nm9q7cNwt2dMkVdxrP4HeDkjw8dcVOt`)
        .then(response =>{
            setResults(response.data)
            console.log(response.data)
        })
    }
 //   React.useEffect(() => {
 //       axios.get(`http://api.giphy.com/v1/gifs/random?api_key=6nm9q7cNwt2dMkVdxrP4HeDkjw8dcVOt`)
 //       .then((response) => {
  //          setResults(response.data);
  //      });
   //   }, []);
   // http://api.giphy.com/v1/gifs/random?api_key=6nm9q7cNwt2dMkVdxrP4HeDkjw8dcVOt

    // Use this link to help with axios https://www.freecodecamp.org/news/how-to-use-axios-with-react/#how-to-make-a-get-request
    return (
        <div>
            <input type="text" id = "input"></input>
            <button type="button" className="btn btn-primary" onClick={Getrandom}>Primary</button>
            <p>{Results.data.embed_url}</p>
               
        </div>
    )
}
