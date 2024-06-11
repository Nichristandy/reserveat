import SideBar from "../../component/SideBar";
import {
  MdOutlineSearch,
  MdOutlineDelete,
  MdOutlineModeEdit,
} from "react-icons/md";
import { useState, useEffect } from "react";
import {
  fetchMenuRestaurant,
  createMenuRestaurant,
  deleteMenuRestaurant,
  updateMenuRestaurant,
} from "../../DatabaseDummy/api";
import ModalLayout from "../../component/ModalLayout";

const AddMenu = () => {
  const [allMenu, setAllMenu] = useState([]);
  const [menuName, setMenuName] = useState("");
  const [menuPrice, setMenuPrice] = useState("");
  const [menuDesc, setMenuDesc] = useState("");
  const [type, setType] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingMenuId, setEditingMenuId] = useState(null);
  const [menuImage, setMenuImage] = useState(null);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    const loadMenu = async () => {
      const data = await fetchMenuRestaurant();
      setAllMenu(data.data);
    };
    loadMenu();
  }, []);

  const handleCloseModal = () => {
    setIsOpen(false);
    setIsEditing(false);
    setEditingMenuId(null);
    clearForm();
  };

  const clearForm = () => {
    setMenuName("");
    setMenuPrice("");
    setMenuDesc("");
    setMenuImage(null);
    setType("meal");
  };

  const handleMenuImageChange = (e) => {
    setMenuImage(e.target.files[0]);
  };

  const handleAddMenu = async (e) => {
    e.preventDefault();
    const newMenu = {
      nama_menu: menuName,
      desc_menu: menuDesc,
      harga_menu: menuPrice,
      type: type,
      menuImage: menuImage
        ? URL.createObjectURL(menuImage)
        : "https://placehold.co/72x72/png",
    };
    await createMenuRestaurant(menuName, menuDesc, menuPrice);
    setAllMenu([...allMenu, newMenu]);
    handleCloseModal();
  };

  const handleEditMenu = (menu) => {
    setIsEditing(true);
    setEditingMenuId(menu.id);
    setMenuName(menu.menuName);
    setMenuDesc(menu.menuDesc);
    setMenuPrice(menu.menuPrice);
    setMenuImage(null);
    setType(menu.menuType);
    handleOpenModal();
  };

  const handleUpdateMenu = async (e) => {
    e.preventDefault();
    const updatedMenu = {
      id: editingMenuId,
      nama_menu: menuName,
      desc_menu: menuDesc,
      harga_menu: menuPrice,
      type: type,
      menuImage: menuImage
        ? URL.createObjectURL(menuImage)
        : allMenu.find((menu) => menu.id === editingMenuId).menuImage,
    };
    await updateMenuRestaurant(editingMenuId, updatedMenu);
    const updatedMenus = allMenu.map((menu) =>
      menu.id === editingMenuId ? updatedMenu : menu
    );
    setAllMenu(updatedMenus);
    handleCloseModal();
  };

  const handleDeleteMenu = async (menuId) => {
    await deleteMenuRestaurant(menuId);
    const filteredMenus = allMenu.filter((menu) => menu.id !== menuId);
    setAllMenu(filteredMenus);
  };

  return (
    <>
      <div className="min-h-screen w-full flex  bg-white pr-8">
        {" "}
        <div className="w-2/12 h-full">
          <SideBar role="admin" />
        </div>
        <div className="w-full flex flex-col gap-10 py-8 pl-5">
          <div className="flex flex-row justify-between items-center">
            <div className="bg-grey flex flex-row justify-between items-center gap-2 rounded-xl w-5/12 px-2 py-1">
              <MdOutlineSearch size={32} color="#B6231D" />
              <input
                className="bg-grey w-full focus:outline-none text-xl"
                type="text"
                placeholder="Search Menu"
              ></input>
            </div>
            <button
              onClick={handleOpenModal}
              className="bg-red rounded-xl text-white uppercase px-2 py-1 font-bold text-2xl"
            >
              Add Menu
            </button>
          </div>
          <div className="flex flex-col gap-5 w-8/12">
            {allMenu.map((menu) => (
              <div
                className="px-4 py-2 flex flex-row w-full border-blue border rounded-xl justify-between items-center"
                key={menu.menuName}
              >
                <div className="flex flex-row gap-5">
                  <img
                    src={menu.menuImage}
                    className="rounded-lg max-w-20 max-h-20"
                  />
                  <div className="flex flex-col gap-3 w-1/2">
                    <span className="text-2xl font-bold">{menu.menuName}</span>
                    <span className="text-lg">{menu.menuDesc}</span>
                  </div>
                  <div className="flex flex-col gap-3 w-1/2">
                    <span className="text-2xl font-bold">{menu.menuPrice}</span>
                    <span className="text-lg bg-blue text-white rounded-lg p-1 w-1/2 flex items-center justify-center">
                      {menu.type}
                    </span>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <button onClick={() => handleEditMenu(menu)}>
                    <MdOutlineModeEdit className="text-blue" size={32} />
                  </button>
                  <button onClick={() => handleDeleteMenu(menu.id)}>
                    <MdOutlineDelete className="text-red" size={32} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* modal */}
      {isOpen && (
        <ModalLayout closeModal={handleCloseModal}>
          <form onSubmit={isEditing ? handleUpdateMenu : handleAddMenu}>
            <div className="rounded-b-xl flex-col flex py-4 px-6 gap-3">
              <div className="flex flex-col">
                <span className="text-2xl ml-2">Menu Name</span>
                <input
                  type="text"
                  value={menuName}
                  placeholder="input menu name"
                  onChange={(e) => setMenuName(e.target.value)}
                  className="p-2 bg-grey rounded-xl text-2xl focus:outline-none"
                ></input>
              </div>

              <div className="flex flex-col">
                <span className="text-2xl ml-2">Menu Description</span>
                <input
                  type="text"
                  value={menuDesc}
                  placeholder="input description"
                  onChange={(e) => setMenuDesc(e.target.value)}
                  className="p-2 bg-grey rounded-xl text-2xl focus:outline-none"
                ></input>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl ml-2">Price</span>
                <input
                  type=" text"
                  value={menuPrice}
                  placeholder="input menu price"
                  onChange={(e) => setMenuPrice(e.target.value)}
                  className="p-2 bg-grey rounded-xl text-2xl focus:outline-none"
                ></input>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl ml-2">Image</span>
                <input
                  type="file"
                  onChange={handleMenuImageChange}
                  className="p-2 bg-grey rounded-xl text-2xl focus:outline-none"
                ></input>
              </div>

              <div className="flex flex-col">
                <span className="text-2xl ml-2">Type</span>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="p-2 bg-grey rounded-xl text-2xl focus:outline-none"
                >
                  <option value="meal">Meal</option>
                  <option value="drink">Drink</option>
                </select>
              </div>
            </div>
            <div className="mt-4 flex flex-row py-4 px-6 justify-between items-end">
              <button
                type="submit"
                className="bg-blue rounded-xl text-white uppercase px-2 py-1 font-bold text-2xl"
              >
                {isEditing ? <span>Update</span> : <span>Add Menu</span>}
              </button>
            </div>
          </form>
        </ModalLayout>
      )}
    </>
  );
};

export default AddMenu;
