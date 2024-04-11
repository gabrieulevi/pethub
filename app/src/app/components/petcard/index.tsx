import "./_Petcard.scss"
import axios from "axios"
import { 
    Card,
    CardTitle,
    CardDescription 

} from "@/components/ui/card"
import { useEffect, useState } from "react"


export default function PetCard(){
    const [pet, setPet] = useState([])
    const getPet = async () => {
        await axios.get("https://dog.ceo/api/breeds/image/random").then(response => {
            setPet(response.data)
        })
    }
    useEffect(() => {
        getPet()
    }, [])
    return(
        <Card className="flex flex-row space-x-1.5 start w-full p-10">
            <div className="image-container">
            <img src={pet.message} alt="pet image"/>
            </div>
            <div className="container">
            <CardTitle>
                Fulano de tal
            </CardTitle>
            <CardDescription>
                Agendado para banho e tosa
            </CardDescription>
            </div>
        </Card>
    )
}