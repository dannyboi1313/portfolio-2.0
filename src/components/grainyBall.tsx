import Image from "next/image";
import React from "react";

interface CardProps {
  blue: boolean;
  display: string;
}

const GrainyBall: React.FC<CardProps> = ({ blue, display }) => {
  return (
    <div className="grainy-container">
      <div className={`grainy-ball ${display}`}>
        <Image
          src={blue ? "/grainy-ball-blue.svg" : "/grainy-ball.svg"}
          fill={true}
          alt="Ball "
          className="image"
        />
      </div>
    </div>
  );
};

export default GrainyBall;
