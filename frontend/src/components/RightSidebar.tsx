import { Ellipsis, Search } from "lucide-react"
import { Input } from "./ui/input"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const trends = [
    { category: "Trending in India", topic: "#ReactJS", posts: "12.3K" },
    { category: "Trending in Tech", topic: "JavaScript", posts: "9.1K" },
    { category: "Trending Worldwide", topic: "OpenAI", posts: "20.4K" },
];

const suggestions = [
    {
        name: "Abhishek",
        username: "@abhishek",
        image: "/K_Logo.jpg"
    },
    {
        name: "Kapil Kumar",
        username: "@kk",
        image: "/K_Logo.jpg",
    },
];

const RightSidebar = () => {
    return (
        <div className="hidden md:block flex-1/4 border-l-1">
            <div className="mx-8 mt-2 relative w-full max-w-md ">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input
                    type="text"
                    placeholder="Search"
                    className="rounded-3xl py-5 pl-10 w-96 text-xl"
                />
            </div>
            {/* Whatshappening */}
            <div className="" >
                <Card className="mx-8 py-0 mt-4">
                    <CardContent className="px-0  space-y-3">
                        <h2 className="px-4 py-2 font-bold text-xl">What’s happening</h2>
                        {trends.map((item, idx) => (
                            <div key={idx} className="px-4 py-1 flex flex-col text-sm hover:bg-primary/10 w-full hover:cursor-pointer">
                                <p className="text-gray-500 flex justify-between ">{item.category}
                                    <Ellipsis className="hover:text-blue-600 hover:bg-primary/5 rounded-full color:sky:100" />
                                </p>
                                <p className="font-bold">{item.topic}</p>
                                <p className="text-gray-500 text-xs">{item.posts} Posts</p>
                            </div>
                        ))}
                        <p className="text-blue-400 rounded-b-md px-4 py-4 hover:bg-primary/10 hover:cursor-pointer">Show more</p>
                    </CardContent>
                </Card>
            </div>

            {/* Who to follow */}

            <div className="mx-8 mt-4">
                <Card className="p-0">
                    <CardContent className="p-0 space-y-3">
                        <h2 className="px-4 py-2 font-bold text-lg">Who to follow</h2>
                        <div className="hover:cursor-pointer">
                            {suggestions.map((user, idx) => (
                                <div key={idx} className="px-4 py-2 flex items-center justify-between hover:bg-primary/10">
                                    <div className="flex items-center gap-3 ">
                                        <Avatar className="w-10 h-10">
                                            <AvatarImage src={user.image} alt={user.name} className="rounded-full" />
                                            <AvatarFallback className="hover:underline">{user.name[0]}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="font-medium text-sm">{user.name}</p>
                                            <p className="text-gray-500 text-xs">{user.username}</p>
                                        </div>
                                    </div>
                                    <Button size="sm" className="px-4 font-semibold rounded-full">
                                        Follow
                                    </Button>
                                </div>
                            ))}
                        </div>
                        <p className="px-4 py-4 text-blue-400 hover:bg-primary/10 ">Show more</p>
                    </CardContent>
                </Card>
            </div>

            {/* footer  */}
            <div className="text-xs text-gray-500 space-x-2 mx-8 mt-4">
                <span className="hover:underline cursor-pointer">Terms of Service &nbsp; |</span>
                <span className="hover:underline cursor-pointer">Privacy Policy &nbsp; |</span>
                <span className="hover:underline cursor-pointer">Cookie Policy &nbsp;&nbsp; |</span>
                <span className="hover:underline cursor-pointer">Accessibility &nbsp;&nbsp; |</span>
                <span className="hover:underline cursor-pointer">Ads Info &nbsp;&nbsp; |</span>
                <span className="hover:underline">More  ...</span>
                <span> &copy; 2025 Y Corp.</span>

            </div>

        </div>
    )
}

export default RightSidebar