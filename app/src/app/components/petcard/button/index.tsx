import "./_Button.scss";
import { Button } from "@/components/ui/button";
import stopwatch from "@/app/components/petcard/assets/stopwatch-svgrepo-com.svg";
import check from "@/app/components/petcard/assets/check-svgrepo-com.svg";
import Image from "next/image";
import { useState, useEffect } from "react";

interface ButtonState {
  status: boolean;
  style: React.CSSProperties;
  icon: string;
}

export default function IgniteButton() {
  const [button, setButton] = useState<ButtonState>({
    status: false,
    style: {},
    icon: check, 
  });

  useEffect(() => {
    setButton({ ...button, status: true });
  }, []);

  const toggleButtonStatus = () => {
    setButton((prevButton) => ({
      ...prevButton,
      status: !prevButton.status,
      style: prevButton.status
        ? { backgroundColor: "red" } 
        : {},
    }));
  };

  return (
    <Button
      className="button jelly-out"
      style={button.style}
      onClick={toggleButtonStatus}
    >
      
      {button.status ? "Iniciar atendimento" : "Finalizar"}
    </Button>
  );
}
