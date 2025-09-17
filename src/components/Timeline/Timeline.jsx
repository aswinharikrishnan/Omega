"use client";

const TimelineSection = () => {
  const hackathonEvents = [
    { date: "4th October", title: "Registration Open", description: "Join us! Registration starts today. Secure your spot now." },
    { date: "5th October", title: "Registration Close", description: "Final chance! Registration ends soon. Don't miss out." },
    { date: "6th October", title: "Team Formation", description: "Form your dream team! Connect with fellow hackers and build amazing projects together." },
    { date: "7th October", title: "Problem Statement", description: "The challenges are revealed! Get ready to tackle exciting problems and showcase your skills." },
    { date: "21st October", title: "Hackathon Begins", description: "The main event starts! 24 hours of coding, creativity, and innovation await you." },
    { date: "22nd October", title: "Project Submission & Awards", description: "Time's up! Submit your amazing projects and celebrate the incredible solutions created." },
  ];

  return (
    <div id="timeline" className="relative flex flex-col items-center justify-center min-h-screen p-2 bg-black">
      <div className="m-auto container font-generalSans min-h-screen flex justify-center flex-col items-center pt-[100px]">
        <h2 className="text-center font-bold text-4xl lg:text-5xl text-white mb-16 tracking-wider">Timeline</h2>

        <div className="mt-[60px] relative w-full max-w-7xl h-[900px]">
          {/* Glow */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 right-20 w-64 h-64 bg-red-600 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-48 h-48 bg-red-500 rounded-full blur-2xl"></div>
          </div>

          {/* Path */}
          <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" viewBox="0 0 1200 600" preserveAspectRatio="none">
            <path
              d="M 100 100 Q 275 100 450 100 Q 625 100 800 100 Q 950 150 900 300 Q 725 300 550 300 Q 375 300 200 300"
              stroke="#ffffff"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              style={{ filter: "drop-shadow(0 0 15px rgba(255,255,255,0.8))" }}
            />

            {hackathonEvents.map((_, index) => {
              let x, y, lineEndY;
              if (index < 3) {
                x = 100 + index * 350;
                y = 100;
                lineEndY = y - 60; // upward
              } else {
                x = 900 - (index - 3) * 350;
                y = 300;
                lineEndY = y + 60; // downward
              }

              return (
                <g key={index}>
                  <circle cx={x} cy={y} r="8" fill="#ffffff" />
                  <line x1={x} y1={y} x2={x} y2={lineEndY} stroke="#ffffff" strokeWidth="2" />
                </g>
              );
            })}
          </svg>

          {/* Cards */}
          <div className="relative z-10">
            {hackathonEvents.map((event, index) => {
              let x, y, isTop;
              if (index < 3) {
                x = 100 + index * 350;
                y = 100 - 60; // top line end
                isTop = true;
              } else {
                x = 900 - (index - 3) * 350;
                y = 300 + 60; // bottom line end
                isTop = false;
              }

              return (
                <div
                  key={index}
                  className="absolute transform -translate-x-1/2"
                  style={{
                    left: `${x}px`,
                    top: isTop ? `${y - 120}px` : `${y}px`, // top cards above the line end, bottom below
                    width: "280px",
                  }}
                >
                  <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-600 rounded-lg p-4 shadow-lg">
                    <div className="text-white/70 text-xs font-medium mb-2">{event.date}</div>
                    <h3 className="font-bold text-white text-sm mb-3">{event.title}</h3>
                    <p className="text-gray-300 text-xs">{event.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;
