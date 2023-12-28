import  Nav  from "./Nav";

const Header = () => {
    return (
        <header className="bg-transparent absolute z-[20] flex-wrap mx-auto flex w-full justify-between border-white p-6 ">
            <Nav />
        </header>
    );
};

export default Header;
