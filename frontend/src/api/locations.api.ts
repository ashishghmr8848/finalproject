import axiosInstance from "./axiosConfig";

export const locationsApi = {
  getAll: async () => {
    const response = await axiosInstance.get("/locations");
    return response.data;
  },
  getById: async (id: string) => {
    const response = await axiosInstance.get(`/locations/${id}`);
    return response.data;
  },
  getAppointmentTypes: async (id: string) => {
    const response = await axiosInstance.get(
      `/locations/${id}/appointment-types`,
    );
    return response.data;
  },
  create: async (data: any) => {
    const response = await axiosInstance.post("/locations", data);
    return response.data;
  },
  update: async (id: string, data: any) => {
    const response = await axiosInstance.put(`/locations/${id}`, data);
    return response.data;
  },
  delete: async (id: string) => {
    const response = await axiosInstance.delete(`/locations/${id}`);
    return response.data;
  },
};
