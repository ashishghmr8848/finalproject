import axiosInstance from "./axiosConfig";

export const appointmentsApi = {
  getAll: async () => {
    const response = await axiosInstance.get("/appointments");
    return response.data;
  },
  getById: async (id: string) => {
    const response = await axiosInstance.get(`/appointments/${id}`);
    return response.data;
  },
  create: async (data: any) => {
    const response = await axiosInstance.post("/appointments", data);
    return response.data;
  },
  update: async (id: string, data: any) => {
    const response = await axiosInstance.put(`/appointments/${id}`, data);
    return response.data;
  },
  delete: async (id: string) => {
    const response = await axiosInstance.delete(`/appointments/${id}`);
    return response.data;
  },
};
