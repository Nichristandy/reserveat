import Navbar from "../component/Navbar";

const Payment = () => {
  return (
    <div className="min-h-screen px-5 md:px-[72px] pb-10">
      <Navbar to={"/menu"} />
      <div className="w-full py-14">
        <div className="text-center font-medium pb-2 w-full uppercase border-b border-blue">
          ORDER
        </div>
        <div className="flex flex-row w-full justify-between items-center mt-5">
          <div className="flex flex-col ">
            <h1 className="text-lg font-medium">lorem ipsum</h1>
            <div className="flex flex-col">
              <span>Rp 30.000</span>
              <span>Quantity: 3</span>
            </div>
          </div>
          <div>
            <img
              className=" rounded-full"
              src="https://placehold.co/86x86/png"
            ></img>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-28">
          <span>Order summary</span>
          <div className="border-blue w-full flex flex-col justify-between min-h-36 border rounded-lg px-9 py-6">
            <div className="flex flex-col gap-3">
              <div className="flex flex-row justify-between">
                <span>Price</span>
                <span>Rp 90.000</span>
              </div>
              <div className="flex flex-row justify-between">
                <span>Tax 10%</span>
                <span>Rp 9.000</span>
              </div>
            </div>
            <div className=" border-t border-blue pt-3">
              <div className="flex flex-row justify-between">
                <span>Total Price</span>
                <span>Rp 99.000</span>
              </div>
            </div>
          </div>
          {/* payment selection */}
          <form className=" mt-8">
            <div className="flex flex-row gap-2">
              <input
                type="checkbox"
                className="rounded w-5 h-auto bg-blue"
              ></input>
              <span className=" capitalize font-bold">
                direct bank transfer
              </span>
            </div>
            {/* nested checklist */}
            <div className="flex flex-col mt-3 gap-2 px-3">
              <div className="flex flex-row gap-2">
                <input
                  type="checkbox"
                  className="rounded w-5 h-auto bg-blue"
                ></input>
                <span className=" capitalize font-bold">BCA</span>
              </div>
              <div className="flex flex-row gap-2">
                <input
                  type="checkbox"
                  className="rounded w-5 h-auto bg-blue"
                ></input>
                <span className=" capitalize font-bold">Mandiri</span>
              </div>
            </div>
            {/* cash on delivery */}
            <div className="flex flex-row gap-2 mt-6">
              <input
                type="checkbox"
                className="rounded w-5 h-auto bg-blue"
              ></input>
              <span className=" capitalize font-bold">
                direct bank transfer
              </span>
            </div>
            {/* submit button */}
            <button
              type="submit"
              className="bg-red text-white text-2xl font-medium uppercase w-full md:w-4/12 py-2 mt-16 rounded-xl"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;
