import { ThemeToggle } from "../../theme/ThemeToggle";


export const Header = async () => {

  return (
    <header className="border-b border-b-accent fixed top-0 left-0 right-0 bg-background">
      <div className="container flex items-center py-2 w-full m-auto gap-1">
        <h1 className="text-2xl font-bold mr-auto">Upply</h1>
        <ThemeToggle />
        {/* {session?.user.id ? <UserProfile /> : <LoginButton />} */}
      </div>
    </header>
  );
};
