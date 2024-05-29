import SideBar from "../../component/SideBar";
import {
  MdOutlineSearch,
  MdOutlineDelete,
  MdOutlineModeEdit,
} from "react-icons/md";
import { useState } from "react";
import ModalLayout from "../../component/ModalLayout";

const DashboardCashier = () => {
  const [openModal, setOpenModal] = useState(false);
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [currentUser, setCurrentUser] = useState({ id: null, name: "" });
  const [isEditing, setIsEditing] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const addUser = (e) => {
    e.preventDefault();
    if (isEditing) {
      updateUser();
    } else {
      setUsers([...users, { id: Date.now(), name, email, password }]);
    }

    setName("");
    setEmail("");
    setPassword("");
    setOpenModal(false);
  };

  const editUser = (user) => {
    setIsEditing(true);
    setCurrentUser(user);
    setName(user.name);
    setEmail(user.email);
    setPassword(user.password);
    handleOpenModal();
  };

  const updateUser = () => {
    setUsers(
      users.map((user) =>
        user.id === currentUser.id ? { ...user, name, email, password } : user
      )
    );
    setIsEditing(false);
    setCurrentUser({ id: null, name: "", email: "", password: "" });
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <>
      <div className="min-h-screen w-full flex  bg-white pr-8">
        <div className="w-2/12">
          <SideBar role="admin" />
        </div>
        <div className="w-full flex flex-col gap-10 py-8 pl-5">
          <div className="flex flex-row justify-between items-center">
            <div className="bg-grey flex flex-row justify-between items-center gap-2 rounded-xl w-5/12 px-2 py-1">
              <MdOutlineSearch size={32} color="#B6231D" />
              <input
                className="bg-grey w-full focus:outline-none text-xl"
                type="text"
                placeholder="Search User"
              ></input>
            </div>
            <button
              onClick={handleOpenModal}
              className="bg-red rounded-xl text-white uppercase px-2 py-1 font-bold text-2xl"
            >
              Add Cashier
            </button>
          </div>

          <div className="flex flex-col gap-5 w-8/12">
            {users.map((user) => (
              <div
                className="px-4 py-2 flex flex-row w-full border-blue border rounded-xl justify-between items-center"
                key={user.id}
              >
                <div className="flex flex-col gap-3">
                  <span className="text-2xl font-bold">{user.name}</span>
                  <span className="text-lg">{user.email}</span>
                </div>
                <div className="flex gap-3 items-center">
                  <button onClick={() => editUser(user)}>
                    <MdOutlineModeEdit className="text-blue" size={32} />
                  </button>
                  <button onClick={() => deleteUser(user.id)}>
                    <MdOutlineDelete className="text-red" size={32} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* modal */}
      {openModal && (
        <ModalLayout closeModal={handleCloseModal}>
          <form onSubmit={addUser}>
            <div className="rounded-b-xl flex-col flex py-4 px-6 gap-3">
              <div className="flex flex-col">
                <span className="text-2xl ml-2">Name</span>
                <input
                  type="text"
                  value={name}
                  placeholder="input your name"
                  onChange={(e) => setName(e.target.value)}
                  className="p-2 bg-grey rounded-xl text-2xl focus:outline-none"
                ></input>
              </div>

              <div className="flex flex-col">
                <span className="text-2xl ml-2">Email</span>
                <input
                  type="email"
                  value={email}
                  placeholder="input your email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-2 bg-grey rounded-xl text-2xl focus:outline-none"
                ></input>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl ml-2">Password</span>
                <input
                  type="password"
                  value={password}
                  placeholder="input your password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-2 bg-grey rounded-xl text-2xl focus:outline-none"
                ></input>
              </div>
            </div>
            <div className="mt-4 flex flex-row py-4 px-6 justify-between items-end">
              <button
                type="submit"
                className="bg-blue rounded-xl text-white uppercase px-2 py-1 font-bold text-2xl"
              >
                {isEditing ? <span>Update</span> : <span>Add Cashier</span>}
              </button>
            </div>
          </form>
        </ModalLayout>
      )}
    </>
  );
};

export default DashboardCashier;
