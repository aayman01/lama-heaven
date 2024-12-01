import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="h-screen w-64 bg-gray-800 text-white">
      <div className="p-4 text-2xl font-bold">Lama Heaven</div>
      <nav className="mt-6">
        <ul>
          <li className="px-4 py-2 hover:bg-gray-700">
            <Link href="/dashboard">Home</Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700">
            <Link href="/dashboard/rooms">Room</Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700">
            <Link href="/dashboard/rooms">Manage Users</Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700">
            <Link href="/dashboard/guests">Guest</Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700">
            <Link href="/dashboard/bookings">Booking</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
