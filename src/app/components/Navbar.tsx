import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-neutral-800 bg-black/70 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        
        {/* Logo / Name */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight hover:text-neutral-300 transition"
        >
          Stephen Parker
        </Link>

        {/* Nav Links */}
        <div className="flex gap-6 text-sm">
          <Link href="#about" className="hover:text-neutral-300 transition">
            About
          </Link>
          <Link href="#projects" className="hover:text-neutral-300 transition">
            Projects
          </Link>
          <Link href="#skills" className="hover:text-neutral-300 transition">
            Skills
          </Link>
          <Link href="#contact" className="hover:text-neutral-300 transition">
            Contact
          </Link>
        </div>

      </div>
    </nav>
  );
}
