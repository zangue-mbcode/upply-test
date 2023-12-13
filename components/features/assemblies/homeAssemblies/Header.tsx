import { ThemeToggle } from "../../theme/ThemeToggle";


export const Header = async () => {

  return (
    <header className="border-b border-b-accent fixed top-0 left-0 right-0 backdrop-blur-lg backdrop-saturate-150 bg-background/70">
      <div className="container flex items-center py-3 w-full max-w-[1280px] m-auto gap-1">
        <h1 className="text-2xl font-bold mr-auto">Upply</h1>
        <div className="hidden md:block">
        <ThemeToggle />
        {/* {session?.user.id ? <UserProfile /> : <LoginButton />} */}
        </div>
      </div>
    </header>
  );
};
