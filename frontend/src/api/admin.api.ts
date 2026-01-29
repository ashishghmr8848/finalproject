import axiosInstance from "./axiosConfig";

export const adminApi = {
  getStatistics: async () => {
    const response = await axiosInstance.get("/admin/statistics");
    return response.data;
  },
  getBookings: async (params?: any) => {
    const response = await axiosInstance.get("/admin/bookings", {params});
    return response.data;
  },
  updateBookingStatus: async (id: string, status: string) => {
    const response = await axiosInstance.put(`/admin/bookings/${id}/status`, {
      status,
    });
    return response.data;
  },
  getUsers: async () => {
    const response = await axiosInstance.get("/admin/users");
    return response.data;
  },
  updateUserRole: async (id: string, role: string) => {
    const response = await axiosInstance.put(`/admin/users/${id}/role`, {role});
    return response.data;
  },
  // Special Dates
  getSpecialDates: async () => {
    const response = await axiosInstance.get("/admin/special-dates");
    return response.data;
  },
  createSpecialDate: async (data: any) => {
    const response = await axiosInstance.post("/admin/special-dates", data);
    return response.data;
  },
  updateSpecialDate: async (id: string, data: any) => {
    const response = await axiosInstance.put(
      `/admin/special-dates/${id}`,
      data,
    );
    return response.data;
  },
  deleteSpecialDate: async (id: string) => {
    const response = await axiosInstance.delete(`/admin/special-dates/${id}`);
    return response.data;
  },
  // Blocked Slots
  getBlockedSlots: async () => {
    const response = await axiosInstance.get("/admin/blocked-slots");
    return response.data;
  },
  createBlockedSlot: async (data: any) => {
    const response = await axiosInstance.post("/admin/blocked-slots", data);
    return response.data;
  },
  deleteBlockedSlot: async (id: string) => {
    const response = await axiosInstance.delete(`/admin/blocked-slots/${id}`);
    return response.data;
  },
};
