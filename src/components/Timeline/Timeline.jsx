"use client";

import { TimelineData } from "@/constants";

const TimelineSection = () => {
  // Create exactly 6 sample events for the timeline
  const sampleEvents = [
    {
      date: "4th October",
      title: "Registration Opens",
      para: "Join us! Registration starts today. Secure your spot now.",
    },
    {
      date: "5th October", 
      title: "Registration Closes",
      para: "Final chance! Registration ends soon. Don't miss out.",
    },
    {
      date: "6th October",
      title: "Team Formation",
      para: "Form your dream team! Connect with fellow hackers and build amazing projects together.",
    },
    {
      date: "7th October",
      title: "Problem Statement Release", 
      para: "The challenges are revealed! Get ready to tackle exciting problems and showcase your skills.",
    },
    {
      date: "21st September",
      title: "Hackathon Begins",
      para: "The main event starts! 24 hours of coding, creativity, and innovation await you.",
    },
    {
      date: "22nd September",
      title: "Project Submission & Awards",
      para: "Time's up! Submit your amazing projects and celebrate the incredible solutions created.",
    },
  ];

  return (
    <div
      id="timeline"
      className="relative flex flex-col items-center justify-center min-h-screen p-2 text-white"
      style={{
        background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 50%, #dc2626 100%)',
        backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(139, 28, 28, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(139, 28, 28, 0.3) 0%, transparent 50%)'
      }}
    >
      <div className="m-auto container font-generalSans min-h-screen flex justify-center flex-col items-center pt-[100px] text-white">
        {/* Bold centered title */}
        <h2 className="text-center font-bold font-orbitron text-6xl lg:text-7xl text-white mb-20 tracking-wider">
          TIME LINE
        </h2>
        
        {/* Exact S-curve Timeline Replication */}
        <div className="mt-[60px] relative w-full max-w-6xl h-[600px]" data-aos="zoom-in-up">
          {/* Abstract background pattern - interconnected dots */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute top-40 right-24 w-24 h-24 bg-white rounded-full blur-2xl"></div>
            <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-white rounded-full blur-2xl"></div>
          </div>

          {/* Exact S-shaped timeline path */}
          <svg 
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            viewBox="0 0 1000 400"
            preserveAspectRatio="none"
          >
            {/* Main smooth S-curve with exact positioning */}
            <path
              d="M 50 100 Q 200 100 350 100 Q 500 100 650 200 Q 800 300 950 300"
              stroke="white"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
              className="drop-shadow-lg"
              style={{
                filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))'
              }}
            />
            
            {/* Rounded end caps */}
            <circle cx="50" cy="100" r="8" fill="white" className="drop-shadow-lg" />
            <circle cx="950" cy="300" r="8" fill="white" className="drop-shadow-lg" />
            
            {/* Exactly 6 milestone points with glowing squares */}
            {sampleEvents.map((_, index) => {
              const progress = index / 5; // 6 points: 0, 0.2, 0.4, 0.6, 0.8, 1
              const x = 50 + (progress * 900);
              
              let y;
              if (progress < 0.5) {
                y = 100; // Top horizontal segment
              } else {
                y = 300; // Bottom horizontal segment
              }
              
              return (
                <g key={index}>
                  {/* Short vertical connecting line */}
                  <line
                    x1={x}
                    y1={y}
                    x2={x}
                    y2={y + 60}
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="drop-shadow-md"
                  />
                  {/* Glowing square milestone */}
                  <rect
                    x={x - 6}
                    y={y + 60}
                    width="12"
                    height="12"
                    fill="white"
                    className="drop-shadow-lg"
                    style={{
                      filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.8))'
                    }}
                  />
                </g>
              );
            })}
          </svg>

          {/* Sample cards at each of the 6 nodes */}
          <div className="relative z-10">
            {sampleEvents.map((item, index) => {
              const progress = index / 5; // 6 points: 0, 0.2, 0.4, 0.6, 0.8, 1
              const x = 50 + (progress * 900);
              
              let y;
              if (progress < 0.5) {
                y = 100;
              } else {
                y = 300;
              }
              
              return (
                <div
                  key={index}
                  className="absolute transform -translate-x-1/2"
                  style={{
                    left: `${x}px`,
                    top: `${y + 80}px`,
                  }}
                >
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 max-w-xs shadow-lg">
                    {/* Date badge */}
                    <div className="text-white/70 text-xs font-orbitron font-medium mb-2 tracking-wide">
                      {item.date}
                    </div>
                    
                    {/* Title */}
                    <h3 className="font-orbitron text-white text-lg font-bold mb-3 leading-tight">
                      {item.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="font-inter text-white/80 text-sm leading-relaxed">
                      {item.para}
                    </p>
                    
                    {/* Subtle hover effect */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile timeline - clean vertical version */}
        <div className="mt-[60px] md:hidden w-full max-w-md">
          <div className="relative">
            {/* Clean vertical line */}
            <div className="absolute left-8 top-0 w-1 h-full bg-white rounded-full"></div>
            
            {sampleEvents.map((item, index) => (
              <div key={index} className="relative mb-16">
                {/* Milestone square */}
                <div className="absolute left-6 w-3 h-3 bg-white rounded transform -translate-x-1/2 drop-shadow-lg"></div>
                
                {/* Card */}
                <div className="ml-20">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 shadow-lg">
                    <div className="text-white/70 text-xs font-orbitron font-medium mb-2">
                      {item.date}
                    </div>
                    <h3 className="font-orbitron text-white text-lg font-bold mb-2">
                      {item.title}
                    </h3>
                    <p className="font-inter text-white/80 text-sm">
                      {item.para}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
