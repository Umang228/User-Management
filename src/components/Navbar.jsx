const Navbar = () => (
  <nav className="bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg text-white">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">User Management</h1>
      <div className="space-x-6">
        <a href="/" className="hover:underline">
          Home
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;
