import "./_Petcard.scss";
import axios from "axios";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import PetAvatar from "./petAvatar";
import { Button } from "@/components/ui/button";
import stopwatch from "@/app/components/petcard/assets/stopwatch-svgrepo-com.svg"
import check from "@/app/components/petcard/assets/check-svgrepo-com.svg"
import Image from "next/image";
import { useState, useEffect } from "react";
import IgniteButton from "./button";

export default function PetCard() {
    
  return (
    <Card className="card flex flex-row space-x-2 justify-between w-full h-40 max-w-sm min-h-40  rounded-2xl p-2">
      <PetAvatar />
      <div className="card-content-container flex-column w-full h-full justify-between ">
        <div className="card-text-container">
        <CardTitle className="text-lg underline"><a href="#">Frida</a></CardTitle>
        <CardDescription>Cliente: Dona Flor da Silva</CardDescription>
        </div>
        <div className="button-container flex h-min bg-white flex-row justify-end">
          
          <IgniteButton/>
        </div>
      </div>
    </Card>
  );
}
