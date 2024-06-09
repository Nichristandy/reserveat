import { useState } from "react";
import SideBar from "../../component/SideBar";
import {
  MdOutlineModeEdit,
  MdOutlineDelete,
  MdOutlineArrowDropDown,
} from "react-icons/md";
import ModalLayout from "../../component/ModalLayout";
const Assets = () => {
  const [assets, setAssets] = useState([
    { nomorMeja: "A1", jumlahOrang: 6, lokasiMeja: "Indoor" },
  ]);
  const [selectedAsset, setSelectedAsset] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [nomorMeja, setNomorMeja] = useState("");
  const [jumlahOrang, setJumlahOrang] = useState("");
  const [idToko, setIdToko] = useState(1);
  const [lokasiMeja, setLokasiMeja] = useState("Indoor");
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleAddAsset = (e) => {
    e.preventDefault();
    const newAsset = {
      nomorMeja,
      jumlahOrang: parseInt(jumlahOrang),
      lokasiMeja,
    };
    if (isEditing) {
      setAssets(
        assets.map((asset) => (asset === selectedAsset ? newAsset : asset))
      );
      setIsEditing(false);
    } else {
      setAssets([...assets, newAsset]);
    }
    setNomorMeja("");
    setJumlahOrang("");
    setLokasiMeja("");

    // console.log(assets);
    setIsOpen(false);
  };

  const handleEditAsset = (asset) => {
    setSelectedAsset(asset);
    setNomorMeja(asset.nomorMeja);
    setJumlahOrang(asset.jumlahOrang);
    setLokasiMeja(asset.lokasiMeja);
    setIsEditing(true);
    setIsOpen(true);
  };

  const handleDeleteAsset = (assetToDelete) => {
    setAssets(assets.filter((asset) => asset !== assetToDelete));
  };

  return (
    <>
      {" "}
      <div className="min-h-screen w-full flex  bg-white pr-8">
        <div className="w-2/12">
          <SideBar role="admin" />
        </div>
        <div className="w-full flex flex-col gap-10 py-8 pl-5">
          <button
            onClick={handleOpenModal}
            className="bg-red rounded-xl text-white uppercase px-2 py-1 font-bold text-2xl w-1/4"
          >
            Add Assets
          </button>
          <div className="flex flex-col gap-5 w-8/12">
            {assets.map((asset) => (
              <div
                className="px-4 py-2 flex flex-row w-full border-blue border rounded-xl justify-between items-center"
                key={asset.nomorMeja}
              >
                <div className="flex flex-row gap-10">
                  <div className="flex flex-col gap-3 ">
                    <span className="text-2xl font-bold">Nomor Meja</span>
                    <span className="text-lg">{asset.nomorMeja}</span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <span className="text-2xl font-bold">Jumlah Orang</span>
                    <span className="text-lg bg-blue text-white rounded-lg p-1 w-1/2 flex items-center justify-center">
                      {asset.jumlahOrang}
                    </span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <span className="text-2xl font-bold">Lokasi Meja</span>
                    <span className="text-lg border border-blue text-black rounded-lg p-1 w-3/4 flex items-center justify-center">
                      {asset.lokasiMeja}
                    </span>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <button onClick={() => handleEditAsset(asset)}>
                    <MdOutlineModeEdit className="text-blue" size={32} />
                  </button>
                  <button onClick={() => handleDeleteAsset(asset)}>
                    <MdOutlineDelete className="text-red" size={32} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {isOpen && (
        <ModalLayout closeModal={handleCloseModal}>
          <form onSubmit={handleAddAsset}>
            <div className="rounded-b-xl flex-col flex py-4 px-6 gap-3">
              <div className="flex flex-col">
                <span className="text-2xl ml-2">Nomor Meja</span>
                <input
                  type="text"
                  value={nomorMeja}
                  placeholder="input nomor meja"
                  onChange={(e) => setNomorMeja(e.target.value)}
                  className="p-2 bg-grey rounded-xl text-2xl focus:outline-none"
                ></input>
              </div>

              <div className="flex flex-col">
                <span className="text-2xl ml-2">Jumlah Orang</span>
                <input
                  type="number"
                  value={jumlahOrang}
                  placeholder="input jumlah orang"
                  onChange={(e) => setJumlahOrang(e.target.value)}
                  className="p-2 bg-grey rounded-xl text-2xl focus:outline-none"
                ></input>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl ml-2">Lokasi Meja</span>
                <div className="flex flex-row bg-grey rounded-xl pr-2">
                  <select
                    type="text"
                    value={lokasiMeja}
                    placeholder="pilih lokasi meja"
                    onChange={(e) => setLokasiMeja(e.target.value)}
                    className="w-full p-3 pointer-events-auto rounded-xl bg-grey text-2xl focus:outline-none"
                  >
                    <option value={"Indoor"}>indoor</option>
                    <option value={"Outdoor"}>Outdoor</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="mt-4 flex flex-row py-4 px-6 justify-between items-end">
              <button
                type="submit"
                className="bg-blue rounded-xl text-white uppercase px-2 py-1 font-bold text-2xl"
              >
                {isEditing ? <span>Update</span> : <span>Add Asset</span>}
              </button>
            </div>
          </form>
        </ModalLayout>
      )}
    </>
  );
};

export default Assets;
