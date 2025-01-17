import MainContent from "@/app/components/parts/dashboard/MainContent";
import SideBar from "@/app/components/parts/dashboard/SideBar";
import TopBar from "@/app/components/parts/dashboard/TopBar";

const DashboardPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <TopBar />
      <div className="flex flex-grow">
        <SideBar />
        <MainContent />
      </div>
    </div>
  );
};

export default DashboardPage;
