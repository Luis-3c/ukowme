import { QuizRresults } from "@/interfaces/quiz";
import { styled } from "@mui/material/styles";
import { PieChart, useDrawingArea } from "@mui/x-charts";
import { fireworks } from "@tsparticles/fireworks";
import React from "react";

const size = {
  width: 400,
  height: 230,
  legend: { hidden: true },
  margin: { right: 6 },
};

const StyledText = styled("text")(({ theme }) => ({
  fill: "white",
  textAnchor: "middle",
  dominantBaseline: "central",
  color: "#000",
  fontSize: 20,
}));

function PieCenterLabel({ children }: any) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

type Props = {
  results: QuizRresults;
}
export default function QuizResults({results}: Props) {

  const data = [
    { value: results.correct, label: "correct", color: "#4ade80" },
    { value: results.incorrect, label: "incorrect",  color: "#BF2727" },
  ];

  const feedback = (percentage: number) => {
    if(percentage === 100){
        startFireworks();
        return "Absolutely amazing! You did it great!";        
    }
    if(percentage >= 80 && percentage < 100){
        startFireworks();  
        return "You did it great!";
    }
    if(percentage >= 50 && percentage < 80){
        return "It could ne better but you did it great!";
    }
    if(percentage >= 0 && percentage < 50){
        return "ouch! Im sure you can do better!";
    }
  }
  
  const startFireworks = () => {
    fireworks({
      colors: ["#358CE3", "#A51493", "#23E1D9"],
      sounds: true,
      brightness: -99,
      saturation: -100,
    });
  }
  
  return (
    <div className=" border-8 border-green-400 rounded-md bg-green-400 text-slate-700 max-w-96 mx-auto">
      <h1 className=" bg-green-400 text-center py-2">
        {feedback(results.percentage)}
      </h1>
      <section style={{backgroundColor: "#0E1018"}} className="py-4 flex flex-col items-center text-white">
        <PieChart series={[{ data, innerRadius: 80 }]} {...size}>
          <PieCenterLabel>{results.percentage}%</PieCenterLabel>
        </PieChart>
        <label className="mt-4">TIME: {results.responseTime}</label>
      </section>
    </div>
  );
}
