import LeftSidebar from "@/components/LeftSidebar"
import RightSidebar from "@/components/RightSidebar";


function Home() {
    
    return (
        <div className="flex m-auto max-w-7xl min-h-screen">
            <LeftSidebar/>
            <div className=" flex-1/2">center</div>
            <RightSidebar/>
        </div>
    );
}

export default Home