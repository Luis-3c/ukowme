"use client"

import { QuizSummaryData } from "@/interfaces/chart";
import { DefaultizedPieValueType } from "@mui/x-charts";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";

interface Props {
    userName: string,
    data: QuizSummaryData[]
}
export default function QuizSummaryChart({userName, data}: Props){
    const sizing = {
        margin: { right: 0 },
        width: 190,
        height: 100,
        legend: { hidden: true },
      };

      const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

      const getArcLabel = (params: DefaultizedPieValueType) => {
        const percent = params.value / TOTAL;
        return params.label === "Correct" ? `${(percent * 100).toFixed(0)}%` : '';
      };

    return(
        <div>
        <span className="mb-1 text-sm">{userName}</span>
        <PieChart
          series={[
            {
              startAngle: -90,
              endAngle: 90,
              data,
              arcLabel: getArcLabel,
            },
          ]}
          sx={{
            [`& .${pieArcLabelClasses.root}`]: {
              fill: "white",
              fontSize: 14,
            },
          }}
          {...sizing}
        />
      </div>
    )
}