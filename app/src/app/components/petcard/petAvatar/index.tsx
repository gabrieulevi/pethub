import "./_PetAvatar.scss"
import axios from "axios"
import { useState, useEffect } from "react"

export default function PetAvatar(){
    const [pet, setPet] = useState({})
    const getPet = async () => {
        await axios.get("https://dog.ceo/api/breeds/image/random").then(response => {
            setPet({backgroundImage: "url('" + response.data.message + "')"})
        })
    }
    useEffect(() => {
        getPet()
    }, [])
    return(
        <div className="image-container" style={pet}>
        </div>
    )
}