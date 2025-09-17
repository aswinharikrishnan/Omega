"use client";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

const TimelineCard = ({ item, mobile, index }) => {
  const isBottom = index % 2 === 1; // alternate rows

  return (
    <TimelineItem
      sx={{
        display: "flex",
        flexDirection: isBottom ? "column-reverse" : "column",
        alignItems: "center",
      }}
    >
      {/* Opposite date (desktop only) */}
      {!mobile && (
        <TimelineOppositeContent
          color="white"
          className="text-white font-orbitron text-[16px]"
          sx={{ m: "auto 0" }}
        >
          {item.date}
        </TimelineOppositeContent>
      )}

      {/* Dot & connectors */}
      <TimelineSeparator>
        {/* Top connector only if not the first item */}
        {!isBottom && index !== 0 && (
          <TimelineConnector style={{ backgroundColor: "rgba(255,255,255,1)" }} />
        )}

        <TimelineDot
          style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
          className="bg-opacity-30"
        >
          <div
            style={{ backgroundColor: "#FFF" }}
            className="size-[8px] rounded-full"
          />
        </TimelineDot>

        {/* Bottom connector only if not the last item */}
        {isBottom && index !== 5 && (
          <TimelineConnector style={{ backgroundColor: "rgba(255,255,255,1)" }} />
        )}
      </TimelineSeparator>

      {/* Content card */}
      <TimelineContent sx={{ m: "20px 0" }}>
        <div
          className="relative rounded-[26px] bg-[#FFF]/[.05] py-[28px] gap-[5px] px-[21px] text-left border-[2px] border-[#FFF] flex flex-col overflow-hidden"
          data-aos="fade-up"
        >
          <span className="font-orbitron text-[#FFF] text-xl font-[500]">
            {item.title}
          </span>
          {mobile && (
            <span className="font-orbitron text-xs text-[#FFF] font-[500]">
              {item.date}
            </span>
          )}
          <span className="font-inter mt-[11px] text-[#FFF]/[0.85]">
            {item.para}
          </span>
        </div>
      </TimelineContent>
    </TimelineItem>
  );
};

export default TimelineCard;
