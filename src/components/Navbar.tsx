import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="
      w-full 
      bg-gradient-to-r 
      from-[var(--primary)] 
      to-[var(--accent)]
      py-4 
      shadow-md
    "
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo / Title */}
        <div className="text-white font-bold text-xl sm:text-2xl">
          For, My Love
        </div>

        {/* Nav Links */}
        <ul className="flex space-x-6">
          <li>
            <Link
              href="/"
              className="
                text-white 
                hover:text-gray-200 
                font-medium 
                transition-colors 
                duration-200
              "
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/calendar"
              className="
                text-white 
                hover:text-gray-200 
                font-medium 
                transition-colors 
                duration-200
              "
            >
              Calendar
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}


// import Link from 'next/link';

// export default function Navbar() {
//     return (
//         <nav className="p-4 bg-gray-100">
//             <ul className="flex space-x-4">
//                 <li>
//                     <Link href="/">Home</Link>
//                 </li>
//                 <li>
//                     <Link href="/calendar">Calendar</Link>
//                 </li>
//             </ul>
//         </nav>
//     );
// }
