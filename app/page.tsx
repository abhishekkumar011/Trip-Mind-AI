import CreatePlan from "./_components/CreatePlan";
import HeroSection from "./_components/HeroSection";
import WonderFulPlaceList from "./_components/WonderFulPlaceList";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CreatePlan/>
      <WonderFulPlaceList/>
    </div>
  );
}
