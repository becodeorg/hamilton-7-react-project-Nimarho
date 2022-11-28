const NavBar = () =>{
    
    return(              
        <nav className=" px-2 sm:px-4 py-2.5 w-full border-b top-0 ...">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <a href="#" className="flex items-center">
                    <img src="./ClayDowling-D20.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Your account</span>
                </a>
                <div className="flex md:order-2">
                    
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    
                </div>
            </div>
        </nav>
    );
}

export default NavBar;