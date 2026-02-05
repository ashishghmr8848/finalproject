import axiosInstance from "./axiosConfig";

export const slotsApi = {
  getAvailable: async (params: {
    locationId: string;
    appointmentTypeId: string;
    startDate: string;
    endDate: string;
  }) => {
    const response = await axiosInstance.get("/slots/available", {params});
    return response.data;
  },
  checkAvailability: async (data: {
    locationId: string;
    appointmentTypeId: string;
    date: string;
    time: string;
  }) => {
    const response = await axiosInstance.post(
      "/slots/check-availability",
      data,
    );
    return response.data;
  },
  // Admin slot configs
  getConfigurations: async () => {
    const response = await axiosInstance.get("/slots/configurations");
    return response.data;
  },
  getConfiguration: async (locationId: string, appointmentTypeId: string) => {
    const response = await axiosInstance.get(
      `/slots/configurations/${locationId}/${appointmentTypeId}`,
    );
    return response.data;
  },
  createConfiguration: async (data: any) => {
    const response = await axiosInstance.post("/slots/configurations", data);
    return response.data;
  },
  updateConfiguration: async (id: string, data: any) => {
    const response = await axiosInstance.put(
      `/slots/configurations/${id}`,
      data,
    );
    return response.data;
  },
  deleteConfiguration: async (id: string) => {
    const response = await axiosInstance.delete(`/slots/configurations/${id}`);
    return response.data;
  },
};
