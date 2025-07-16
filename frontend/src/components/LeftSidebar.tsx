import { Activity, Bell, Ellipsis, HomeIcon, Mail, SearchIcon, SunMoon, User, Users, Zap } from "lucide-react";
import { Button } from './ui/button'
import useTheme from "@/hooks/useTheme";

const menu = [
    {
        icon: <HomeIcon size={25} />,
        text: "Home",
        link: "/home"
    },
    {
        icon: <SearchIcon size={25} />,
        text: "Explore",
        link: "/home"
    },
    {
        icon: <Bell size={25} />,
        text: "Notifications",
        link: "/home"
    },
    {
        icon: <Mail size={25} />,
        text: "Messages",
        link: "/home"
    },
    {
        icon: <Users size={25} />,
        text: "Communities",
        link: "/home"
    },
    {
        icon: <Activity size={25} />,
        text: "Activites",
        link: "/home"
    },
    {
        icon: <Zap size={25} />,
        text: "Premium",
        link: "/home"
    },
    {
        icon: <User size={25} />,
        text: "Profile",
        link: "/home"
    },
    {
        icon: <SunMoon size={25} />,
        text: "Theme",
        link: "/home"
    },
    {
        icon: <Ellipsis size={25} />,
        text: "More",
        link: "/home"
    }
]

const LeftSidebar = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className=" hidden lg:block flex-1/4 flex-col justify-between  px-2 border-r-1">
                {/* Logo */}
                <div className="ml-2">
                    <span className="inline-flex rounded-full justify-center p-1 bg-black hover:bg-[#292828]">
                        <img className="h-10 rounded-full" src="/Y_Logo.png" alt="y_logo" />
                    </span>
                </div>
                {/* Menu */}
                <div>
                    <div className="mt-2">
                        {menu.map((item, index) => (
                            <div id={index.toString()} className="">
                                <div className="inline-flex hover:bg-primary/10 rounded-full py-3 px-4 items-center gap-6 text-xl">
                                    {item.icon}
                                    <span>{item.text}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Button onClick={toggleTheme} className="rounded-full mt-2 py-6 font-semibold w-10/12 text-lg" size="lg" >Post</Button>
                </div>
                <div className="flex mt-6 justify-between items-center gap-4 py-2 px-2 rounded-full hover:bg-primary/10">
                    <div className="flex items-center gap-4">
                        <img className="h-10 rounded-full" src="K_Logo.jpg" alt="user logo" />
                        <div>
                            <p>Kapil Kumar</p>
                            <p className="text-sm text-gray-500">@KapilKumar_1</p>
                        </div>
                    </div>
                    <Ellipsis />
                </div>
            </div>
  )
}

export default LeftSidebar