import axios from "axios";

export const httpClientPlugin = {
  get: async (url: string) => {
    const { data } = await axios.get(url);
    return data;
  },

  post: async (url: string, data: any) => {
    throw new Error("Not implemented yet");
  },
  put: async (url: string, data: any) => {
    throw new Error("Not implemented yet");
  },
  patch: async (url: string, data: any) => {
    throw new Error("Not implemented yet");
  },
  delete: async (url: string) => {
    throw new Error("Not implemented yet");
  },
};
