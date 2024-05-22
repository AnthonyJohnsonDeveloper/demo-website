


const NavBar = () => {
  return (
    <nav className="z-50">
      <div className="h-10v flex justify-between lg:py-10 px-20 py-20 border-b">
        <div className="flex items-center flex-1">
          <h2 className="text-3xl font-bold text-pink-800">Demo</h2>
        </div>
        <div>
          <ul className="flex gap-8 mr-16 text-[18px]">
            <link to="/">
              <li className='hover:text-pink-400 transition border-b-2 border-white hover:border-pink:400 cursor-pointer'>Home</li>
            </link>
            <link to="/">
              <li className='hover:text-pink-400 transition border-b-2 border-white hover:border-pink:400 cursor-pointer'>Shop</li>
            </link>
            <link to="/">
              <li className='hover:text-pink-400 transition border-b-2 border-white hover:border-pink:400 cursor-pointer'>Blogs</li>
            </link>
            <link to="/">
              <li className='hover:text-pink-400 transition border-b-2 border-white hover:border-pink:400 cursor-pointer'>Pages</li>
            </link>
            <link to="/">
              <li className='hover:text-pink-400 transition border-b-2 border-white hover:border-pink:400 cursor-pointer'>Product</li>
            </link>
            <link to="/">
              <li className='hover:text-pink-400 transition border-b-2 border-white hover:border-pink:400 cursor-pointer'>Contact</li>
            </link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
