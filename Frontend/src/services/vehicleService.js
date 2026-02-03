import axios from "axios";

const backendURL = import.meta.env.VITE_API_URL;

const BASE_URL = `${backendURL}/api/vehicles`;

// Get token from localStorage
const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const vehicleService = {
  // Get all vehicles
  getAllVehicles: async () => {
    const response = await axios.get(`${BASE_URL}/get-vehicles`); // Fixed concatenation
    return response.data;
  },

  // Create vehicle (admin only)
  createVehicle: async (vehicleData) => {
    const response = await axios.post(
      `${BASE_URL}/create-vehicles`,
      vehicleData,
      getAuthHeader(),
    );
    return response.data;
  },

  // Get vehicle by id
  getVehicleById: async (id) => {
    const response = await axios.get(`${BASE_URL}/vehicles/${id}`);
    return response.data;
  },

  // Update vehicle (admin only)
  updateVehicle: async (id, vehicleData) => {
    const response = await axios.put(
      `${BASE_URL}/vehicles/${id}`,
      vehicleData,
      getAuthHeader(),
    );
    return response.data;
  },

  // Delete vehicle (admin only)
  deleteVehicle: async (id) => {
    const response = await axios.delete(
      `${BASE_URL}/vehicles/${id}`,
      getAuthHeader(),
    );
    return response.data;
  },

  // Update availability (admin only)
  updateAvailability: async (id, isAvailable) => {
    const response = await axios.patch(
      `${BASE_URL}/vehicles/${id}/availability`,
      { isAvailable },
      getAuthHeader(),
    );
    return response.data;
  },
};
