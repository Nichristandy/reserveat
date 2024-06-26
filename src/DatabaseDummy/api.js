import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api";

export const fetchTables = async (room = "INDOOR") => {
  try {
    const response = await axios.post(`${API_BASE_URL}/ReadAssetTokoById`, {
      id_toko: 1,
      pilihan_tempat: room,
    });
    return response.data;
  } catch (error) {
    console.error("There was an error fetching the tables!", error);
    return [];
  }
};

// export const filterTables = async () => {
//   try{
//     const response = await axios.post(``)
//   }
// }

export const bookTables = async (
  tableName,
  hour,
  date,
  id_user,
  room,
  id_toko,
  people,
  email,
  phone_number,
  name,
  id_asset,
  status_tempat,
  buttonValue
) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/CreateReservasi`, {
      nomor_meja: tableName,
      hour: hour,
      date: date,
      id_user: id_user,
      tempat: room,
      id_toko: id_toko,
      tombol: buttonValue,
      people: people,
      email: email,
      phone_number: phone_number,
      name: name,
      role: "PELANGGAN",
      status: status_tempat,
      id_asset: id_asset,
    });
    return response.data;
  } catch (error) {
    console.error("There was an error booking the table", error);
    return null;
  }
};

export const updateReservasi = async () => {
  try {
    const response = await axios.post(`${API_BASE_URL}/UpdateReservasiById`);

    return response.data;
  } catch (error) {
    console.error("there was an error when you update");
  }
};

export const deleteReservasi = async () => {
  try {
    const response = await axios.post(`${API_BASE_URL}/DeleteReservasiById`);

    return response.data;
  } catch (error) {
    console.error("there was an error to delete reservation");
  }
};

export const fetchMenuRestaurant = async () => {
  try {
    const response = await axios.post(`${API_BASE_URL}`);

    return response.data;
  } catch (error) {
    console.error("There was an error with you menu");
  }
};

export const updateMenuRestaurant = async (menu_id) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/Menu/${menu_id}`);

    return response.data;
  } catch (error) {
    console.error("There was an error for updating menu");
  }
};

export const deleteMenuRestaurant = async () => {
  try {
    const response = await axios.post(`${API_BASE_URL}`);

    return response.data;
  } catch (error) {
    console.error("There was an error deleting your menu");
  }
};

export const createMenuRestaurant = async (menuName, menuDesc, menuPrice) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/CreateMenuRestaurant`, {
      nama_menu: menuDesc,
      harga_menu: menuPrice,
      desc_menu: menuDesc,
    });

    return response.data;
  } catch (error) {
    console.error("There was an error creating your menu");
  }
};

export const fetchUser = async () => {
  try {
    const response = await axios.post(`${API_BASE_URL}/ReadAllUser`);

    return response.data;
  } catch (error) {
    console.error("There was an error fetching user data");
  }
};

export const fetchCashier = async () => {
  try {
    const response = await axios.post(`${API_BASE_URL}/ReadAllCashier`);

    return response.data;
  } catch (error) {
    console.error("There was an error fetching cashier data");
  }
};
export const updateCashier = async (cashierName, cashierData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/UpdateCashierbyId`, {
      cashierName,
      ...cashierData,
    });

    return response.data;
  } catch (error) {
    console.error("There was an error fetching cashier data");
  }
};
export const deleteCashier = async (cashierName) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/DeleteCashierbyId`, {
      cashierName,
    });

    return response.data;
  } catch (error) {
    console.error("There was an error fetching cashier data");
  }
};
export const createCashier = async (
  cashierName,
  cashierEmail,
  cashierPassword,
  role
) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/CreateCashier`, {
      cashier_name: cashierName,
      cashier_email: cashierEmail,
      cashier_password: cashierPassword,
      role: role,
    });

    return response.data;
  } catch (error) {
    console.error("There was an error fetching cashier data");
  }
};

export const fetchUserStatistic = async () => {
  try {
    const response = await axios.post(`${API_BASE_URL}/ReadUserStatistic`);

    return response.data;
  } catch (error) {
    console.error("There was an error fetching cashier data");
  }
};

export const fetchAssets = async () => {
  try {
    const response = await axios.post(`${API_BASE_URL}/ReadAssetTokoById`, {
      id_toko: 1,
    });

    return response.data;
  } catch (error) {
    console.error("There was an error fetching cashier data");
  }
};
export const deleteAssets = async (nomorMeja, idToko) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/DeleteAsset`, {
      nomor_meja: nomorMeja,
      id_toko: idToko,
    });

    return response.data;
  } catch (error) {
    console.error("There was an error fetching cashier data");
  }
};
export const updateAssets = async (
  nomorMeja,
  idToko,
  lokasiMeja,
  jumlahOrang
) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/CreateAsset`, {
      nomor_meja: nomorMeja,
      id_toko: idToko,
      tempat: lokasiMeja,
      people: jumlahOrang,
    });

    return response.data;
  } catch (error) {
    console.error("There was an error fetching cashier data");
  }
};
export const createAssets = async (
  nomorMeja,
  jumlahOrang,
  idToko,
  lokasiMeja
) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/CreateAsset`, {
      id_toko: idToko,
      nomor_meja: nomorMeja,
      people: jumlahOrang,
      tempat: lokasiMeja,
    });

    return response.data;
  } catch (error) {
    console.error("There was an error fetching cashier data");
  }
};
