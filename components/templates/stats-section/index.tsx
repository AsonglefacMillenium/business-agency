import { StatsCard } from "@/components/organisms";
import React from "react";

const StatsSection = () => {
  return (
    <div className="w-full bg-white mt-[100px]">
      <div className="lg:w-[80%] w-[90%] flex justify-between flex-wrap mx-auto">
        <StatsCard
          data="200+"
          title="We’re a family"
          text="Speedily say has suitable disposal add boy. On fourth doubt miles of child. Exercise joy man children rejoiced."
        />
        <StatsCard
          data="99%"
          title="Graphic Design "
          text="Perceived end knowledge certainly day sweetness why cordially. Ask a quick six seven offer see among."
        />
        <StatsCard
          data="1.5M+"
          title="Digital Marketing "
          text="Rooms oh fully taken by worse do. Points afraid but may end law lasted. Was out laughter raptures returned outweigh."
        />
      </div>
    </div>
  );
};

export default StatsSection;
