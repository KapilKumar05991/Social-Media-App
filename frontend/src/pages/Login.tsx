import { Button } from "@/components/ui/button"
import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import { Input } from "../components/ui/input";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login:", { email, password });
    // Later: call your API here
  };
  return (
    <div className="flex h-screen items-center justify-center">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md rounded-lg border mx-4 p-8 shadow-lg space-y-6"
      >
        <div className="flex items-center justify-center gap-2 rounded-lg">
          <h2 className="text-4xl lg:text-5xl font-bold text-center">Login</h2>
          <span className="inline-flex rounded-full justify-center p-1 bg-black hover:bg-[#292828]">
            <img className="h-14 rounded-full" src="/Y_Logo.png" alt="y_logo" />
          </span>
        </div>

        <div>
          <Label htmlFor="email">Email or Username</Label>
          <Input
            id="email"
            type="email"
            placeholder="jhon@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <Button type="submit" className="w-full">
          Login
        </Button>
        <p className="text-center">Don't have an account?  <Link className="text-blue-500" to="/signup">Signup</Link> </p>
      </form>
    </div>
  )
}

export default Login

