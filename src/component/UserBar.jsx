const UserBar = ({ user }) => {
  return (
    <>
      {" "}
      <div className="px-4 py-2 flex flex-row w-full border-blue border rounded-xl justify-between items-center">
        <div className="flex flex-col gap-3">
          <span className="text-2xl font-bold">{user}</span>
          <span className="text-lg">+6212345678</span>
        </div>
        <div className="flex flex-col gap-3 text-end">
          <span className="text-2xl font-bold">17:00</span>
          <span className="text-lg">6 people</span>
        </div>
      </div>
    </>
  );
};

export default UserBar;
