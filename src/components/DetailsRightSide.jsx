// import { loadStripe } from "@stripe/stripe-js";
// const stripePromise = loadStripe(
//   process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
// );
"use client";
const DetailsRightSide = ({
  fakeData,
  handleCheckIn,
  handleCheckOut,
  handleSubmit,
  customBtnColor,
  customColor,
  checkIn,
  checkOut,
  adults,
  isAdultsInputVisible,
  isChildrenInputVisible,
  child: children,
  daysBetween,
}) => {
  return (
    <div className=" text-black p-6 w-full px-10 py-12 lg:w-[440px] mx-auto rounded-lg shadow-md flex-1">
      <div className="flex justify-between items-stretch">
        <h2 className="text-lg font-medium mb-4">Reserve:</h2>
        <p className="text-lg font-semibold mb-6">
          <span className="text-[#80ff80]">{fakeData.price}৳</span>/night
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        {/* Check-In */}
        <div className="mb-4 ">
          <label htmlFor="check-in" className="block text-sm font-medium mb-1">
            Check In
          </label>
          <input
            type="date"
            id="check-in"
            name="checkIn"
            className={customColor}
            value={checkIn}
            onChange={handleCheckIn}
          />
        </div>

        {/* Check-Out */}
        <div className="mb-4">
          <label htmlFor="check-out" className="block text-sm font-medium mb-1">
            Check Out
          </label>
          <input
            type="date"
            id="check-out"
            name="checkOut"
            className={customColor}
            value={checkOut}
            onChange={handleCheckOut}
            min={new Date(checkIn).toISOString().split("T")[0]}
          />
        </div>

        {/* Adults */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Adults</label>
          <button
            type="button"
            onClick={() => setIsAdultsInputVisible(!isAdultsInputVisible)}
            className={customColor}
          >
            Adults: {adults}
          </button>
          {isAdultsInputVisible && (
            <div className="relative mt-2 bg-[#F8F5F1] border border-collapse rounded-lg p-4">
              <div className="flex justify-between items-center">
                <button
                  type="button"
                  onClick={handleDecreaseAdults}
                  className={customBtnColor}
                >
                  -
                </button>
                <input
                  type="number"
                  value={adults}
                  readOnly
                  className={customBtnColor}
                />
                <button
                  type="button"
                  onClick={handleIncreaseAdults}
                  className={customBtnColor}
                >
                  +
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Children */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Children</label>
          <button
            type="button"
            aria-expanded={isChildrenInputVisible}
            onClick={() => setIsChildrenInputVisible(!isChildrenInputVisible)}
            className={customColor}
          >
            Children: {children}
          </button>
          {isChildrenInputVisible && (
            <div className="relative mt-2 w-[250px] bg-[#F8F5F1] border border-collapse rounded-lg p-4">
              <div className="flex justify-between items-center">
                <button
                  type="button"
                  onClick={handleDecreaseChildren}
                  className={customBtnColor}
                >
                  -
                </button>
                <input
                  type="number"
                  value={children}
                  readOnly
                  className={customBtnColor}
                />
                <button
                  type="button"
                  onClick={handleIncreaseChildren}
                  className={customBtnColor}
                >
                  +
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Total Cost */}
        <div className={customColor}>
          <p className="text-lg font-semibold">
            Total Cost
            <span className="text-yellow-500 font-bold float-right">
              {fakeData.price * daysBetween} ৳
            </span>
          </p>
        </div>

        <button
          type="submit"
          className="border border-[#80ff80] text-black mt-4 hover:bg-[#80ff80] w-full hover:text-white py-3 px-5 rounded-lg duration-500"
        >
          Book Your Stay Now
        </button>
      </form>
    </div>
  );
};

export default DetailsRightSide;
