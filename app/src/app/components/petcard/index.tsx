import "./_Petcard.scss";
import axios from "axios";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import PetAvatar from "./petAvatar";
import { Button } from "@/components/ui/button";
import stopwatch from "@/app/components/petcard/assets/stopwatch-svgrepo-com.svg"
import Image from "next/image";
import { useState, useEffect } from "react";


export default function PetCard() {
    const [buttonStatus, setButtonStatus] = useState()
    const [buttonStyle, setButtonStyle] = useState()
    useEffect(() => {
        setButtonStatus(true)
    }, [])
    
    useEffect(() => {
        if (buttonStatus){
            setButtonStyle({
                backgroundColor: "red"
            })
        } else {
            console.log(buttonStatus)
            setButtonStyle({
                backgroundColor: "black"
        
            })
        }
    }, [buttonStatus])
  return (
    <Card className="card flex flex-row space-x-2 justify-between w-full h-40 max-w-sm min-h-40  rounded-2xl p-2">
      <PetAvatar />
      <div className="card-content-container flex-column w-full h-full justify-between ">
        <div className="card-text-container">
        <CardTitle className="text-lg">Frida</CardTitle>
        <CardDescription>Cliente: Dona Flor da Silva</CardDescription>
        </div>
        <div className="button-container flex h-min bg-white flex-row justify-end">
          <Button className="button" style={buttonStyle} onClick={
            useEffect(() =>{
                setButtonStatus(false)
            },[buttonStyle, buttonStatus])
            }
           ><span><Image  alt="stopwatch" src={stopwatch}/></span>Iniciar atendimento</Button>
        </div>
      </div>
    </Card>
  );
}
