import SideBar from "../../component/SideBar";
import { MdOutlineModeEdit, MdOutlineDelete } from "react-icons/md";
const Assets = () => {
  return (
    <>
      {" "}
      <div className="min-h-screen w-full flex  bg-white pr-8">
        <div className="w-2/12">
          <SideBar role="admin" />
        </div>
        <div className="w-full flex flex-col gap-10 py-8 pl-5">
          <button className="bg-red rounded-xl text-white uppercase px-2 py-1 font-bold text-2xl w-1/4">
            Add Assets
          </button>
          <div className="flex flex-col gap-5 w-8/12">
            <div className="px-4 py-2 flex flex-row w-full border-blue border rounded-xl justify-between items-center">
              <div className="flex flex-row gap-10">
                <div className="flex flex-col gap-3 ">
                  <span className="text-2xl font-bold">Nomor Meja</span>
                  <span className="text-lg">A1</span>
                </div>
                <div className="flex flex-col gap-3">
                  <span className="text-2xl font-bold">Jumlah Orang</span>
                  <span className="text-lg bg-blue text-white rounded-lg p-1 w-1/2 flex items-center justify-center">
                    6
                  </span>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <button>
                  <MdOutlineModeEdit className="text-blue" size={32} />
                </button>
                <button>
                  <MdOutlineDelete className="text-red" size={32} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Assets;
