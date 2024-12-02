const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center bg-white p-4 shadow rounded">
        <h1 className="text-2xl font-bold">Lama Heaven</h1>
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          Create New Booking
        </button>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-sm font-bold">New Booking</h2>
          <p className="text-2xl font-bold">172</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-sm font-bold">Available Rooms</h2>
          <p className="text-2xl font-bold">103</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-sm font-bold">Check In</h2>
          <p className="text-2xl font-bold">71</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-sm font-bold">Check Out</h2>
          <p className="text-2xl font-bold">29</p>
        </div>
      </div>

      {/* Booking Schedule & Charts */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-lg font-bold">Recent Booking Schedule</h2>
          {/* Calendar or schedule content */}
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-lg font-bold">Reservation Stats</h2>
          {/* Chart content */}
        </div>
      </div>

      {/* Housekeeping Status */}
      <div className="bg-white p-4 shadow rounded">
        <h2 className="text-lg font-bold">Housekeeping</h2>
        {/* Housekeeping status content */}
      </div>
    </div>
  );
};

export default Dashboard;
