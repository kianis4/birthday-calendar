import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="p-4 bg-gray-100">
            <ul className="flex space-x-4">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/calendar">Calendar</Link>
                </li>
            </ul>
        </nav>
    );
}
