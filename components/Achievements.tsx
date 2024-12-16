import { FaTrophy, FaClock, FaBolt } from "react-icons/fa";

const achievements = [
  {
    title: "Push Your Luck",
    description: "Increase Mines amount to Max",
    icon: <FaTrophy />,
    progress: "4/10",
  },
  {
    title: "Game Scapper",
    description: "Hit 3x multiplier in Crash",
    icon: <FaClock />,
    progress: "3/10",
  },
  {
    title: "Big Fella",
    description: "Win a bet of 500+",
    icon: <FaBolt />,
    progress: "5/10",
  },
  {
    title: "Big Fella",
    description: "Win a bet of 500+",
    icon: <FaBolt />,
    progress: "5/10",
  },
  {
    title: "Big Fella",
    description: "Win a bet of 500+",
    icon: <FaBolt />,
    progress: "5/10",
  },
];

export default function Achievements() {
  return (
    <div className="p-4 rounded-lg text-textLight">
      <div className="space-y-4">
        {achievements.map((achieve, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-primary p-3 rounded-lg shadow-md"
          >
            <div className="flex items-center space-x-4">
              <div className="text-highlight text-2xl">{achieve.icon}</div>
              <div>
                <h3 className="font-bold">{achieve.title}</h3>
                <p className="text-sm">{achieve.description}</p>
              </div>
            </div>
            <div className="text-highlight font-bold">{achieve.progress}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
