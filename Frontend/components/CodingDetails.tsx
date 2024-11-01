import React from "react";
import { LayoutDashboard } from "lucide-react";
import CircleChart from "./ui/circleChart";
import GithubCalendar from "react-github-calendar";

function CodingDetails() {
  return (
    <>
      <div className="border-b-2 pb-10 w-full">
        <div className="heading w-full flex items-center  justify-start ">
          <LayoutDashboard />
          <h1 className="text-xl font-bold">Coding Details</h1>
        </div>
        <div className="border-2 p-5 px-10 rounded-xl w-full justify-center">
          <div className="container w-full flex gap-20">
            <div className="graph-container flex border-r-2 w-[min-content] pr-20">
              <CircleChart
                data={[
                  { value: 40, label: "JavaScript" },
                  { value: 20, label: "TypeScript" },
                  { value: 15, label: "Python" },
                  { value: 10, label: "Java" },
                  { value: 8, label: "Go" },
                ]}
              />
            </div>
            <div className="flex items-center justify-center w-full">
              <GithubCalendar username="bhattansh" colorScheme="light" />
            </div>
            <div className="activity-container"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CodingDetails;
