import axiosInstance from "./axiosConfig";

export const waitlistApi = {
  join: async (data: any) => {
    const response = await axiosInstance.post("/waitlist", data);
    return response.data;
  },
  getMyWaitlist: async () => {
    const response = await axiosInstance.get("/waitlist");
    return response.data;
  },
  updateEntry: async (id: string, data: any) => {
    const response = await axiosInstance.put(`/waitlist/${id}`, data);
    return response.data;
  },
  removeEntry: async (id: string) => {
    const response = await axiosInstance.delete(`/waitlist/${id}`);
    return response.data;
  },
  getPosition: async (id: string) => {
    const response = await axiosInstance.get(`/waitlist/position/${id}`);
    return response.data;
  },
};
