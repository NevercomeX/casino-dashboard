import Achievements from "@/components/Achievements";
import Footer from "@/components/Footer";
import FriendsList from "@/components/RightMenuComponent/FriendsList";
import GameBrowser from "@/components/GameBrowserComponent/GameBrowser";
import GameGrid from "@/components/GameGrid";
import GameWithPlayers from "@/components/GameWithPlayers";
// import Leaderboard from "@/components/Leaderboard";
import RecentBets from "@/components/RecentBets";

export default function Home() {
  return (
    <div className="space-y-6 w-full gap-6">
      {/* Game Grid */}
      <GameWithPlayers />
      <GameGrid />
      <GameBrowser />
      {/* Achievements & Friends List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Achievements />
        <FriendsList />
      </div>
      <RecentBets />
      <Footer />
      {/* <Leaderboard /> */}
    </div>
  );
}
