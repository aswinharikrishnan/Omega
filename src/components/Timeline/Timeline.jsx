"use client";

const TimelineSection = () => {
  const hackathonEvents = [
    {
      date: "4th October",
      title: "Registration Open",
      description: "Join us! Registration starts today. Secure your spot now.",
    },
    {
      date: "5th October",
      title: "Registration Close",
      description: "Final chance! Registration ends soon. Don't miss out.",
    },
    {
      date: "6th October",
      title: "Team Formation",
      description:
        "Form your dream team! Connect with fellow hackers and build amazing projects together.",
    },
    {
      date: "7th October",
      title: "Problem Statement",
      description:
        "The challenges are revealed! Get ready to tackle exciting problems and showcase your skills.",
    },
    {
      date: "21st October",
      title: "Hackathon Begins",
      description:
        "The main event starts! 24 hours of coding, creativity, and innovation await you.",
    },
    {
      date: "22nd October",
      title: "Project Submission & Awards",
      description:
        "Time's up! Submit your amazing projects and celebrate the incredible solutions created.",
    },
  ];

  return (
    <div
      id="timeline"
      className="relative flex flex-col items-center justify-center p-2 bg-black"
    >
      <div className="m-auto container font-generalSans min-h-screen flex justify-center flex-col items-center pt-[100px]">
        <h2 className="text-center font-bold text-4xl lg:text-5xl text-white mb-16 tracking-wider">
          Timeline
        </h2>

        <div className="mt-[60px] relative w-[1500px] max-w-7xl h-[1300px]">
          {/* White Serpent Path (untouched) */}
          <svg
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            viewBox="0 0 950 500"
            preserveAspectRatio="none"
          >
            <path
              d="M45,5  770,5"
              stroke="#ffffff"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M770,5  C1000,50  900,200  770,200"
              stroke="#ffffff"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M770,200  130,200"
              stroke="#ffffff"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M130,200 C-70,250 10,400  130,400"
              stroke="#ffffff"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M130,400  900,400"
              stroke="#ffffff"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
            />

            {/* Event Dots */}
            {hackathonEvents.map((_, index) => {
              let x, y, lineEndY;

              if (index < 3) {
                y = 50;
                lineEndY = y - 45;
                x = 190 + index * 270;
              } else if (index >= 3 && index < 6) {
                x = 725 - (index - 3) * 270;
                y = 260;
                lineEndY = y - 60;
              }

              return (
                <g key={index}>
                  <circle
                    cx={x}
                    cy={y}
                    r="6"
                    fill="white"
                    className="drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]"
                  />
                  <line
                    x1={x}
                    y1={y}
                    x2={x}
                    y2={lineEndY}
                    stroke="white"
                    strokeWidth="2"
                  />
                </g>
              );
            })}
          </svg>

          {/* Glassmorphism Cards */}
          <div className="relative z-10 w-full h-full">
            {hackathonEvents.map((event, index) => {
              let x, y;
              if (index < 3) {
                x = 260 + index * 355;
                y = 110;
              } else {
                x = 990 - (index - 3) * 370;
                y = 655;
              }

              return (
                <div
                  key={index}
                  className="absolute transform -translate-x-1/2"
                  style={{
                    left: `${x}px`,
                    top: `${y + 20}px`,
                    width: "310px",
                  }}
                >
                  <div
                    className="
                      h-[240px] w-full
                      rounded-2xl
                      bg-white/5 backdrop-blur-xl
                      border border-white/20
                      shadow-[0_8px_32px_rgba(0,0,0,0.3)]
                      p-6 flex flex-col
                      transition-all duration-300
                      hover:scale-105 hover:shadow-[0_12px_48px_rgba(0,0,0,0.5)] hover:border-white/40
                    "
                  >
                    <div className="text-white/70 text-xs uppercase tracking-wider mb-2">
                      {event.date}
                    </div>
                    <h3
                      className="
                        font-orbitron text-lg font-semibold
                        text-transparent bg-clip-text
                        bg-gradient-to-r from-white via-gray-300 to-white/60
                        mb-3
                      "
                    >
                      {event.title}
                    </h3>
                    <p className="font-inter text-sm text-white/80 leading-relaxed">
                      {event.description}
                    </p>
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
