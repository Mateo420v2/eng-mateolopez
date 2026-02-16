export default function Navbar() {
    return (
      <nav className="glass fixed w-full top-0 left-0 z-50 border-b border-gray-700">
        <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-xl font-bold text-accent">
            Mateo.dev
          </h1>
          <div className="space-x-6 text-sm">
            <a href="#projects" className="hover:text-accent transition">
              Projects
            </a>
            <a href="#about" className="hover:text-accent transition">
              About
            </a>
            <a href="#contact" className="hover:text-accent transition">
              Contact
            </a>
          </div>
        </div>
      </nav>
    );
  }