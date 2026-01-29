import axiosInstance from "./axiosConfig";

export const bookingsApi = {
  create: async (data: any) => {
    const response = await axiosInstance.post("/bookings", data);
    return response.data;
  },
  getMyBookings: async () => {
    const response = await axiosInstance.get("/bookings");
    return response.data;
  },
  getById: async (id: string) => {
    const response = await axiosInstance.get(`/bookings/${id}`);
    return response.data;
  },
  cancel: async (id: string, reason?: string) => {
    const response = await axiosInstance.put(`/bookings/${id}/cancel`, {
      reason,
    });
    return response.data;
  },
  delete: async (id: string) => {
    // Admin only usually
    const response = await axiosInstance.delete(`/bookings/${id}`);
    return response.data;
  },
};
