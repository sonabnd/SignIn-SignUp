import { API } from "../../../core/configs/api.config";
import axiosInstance from "../../../core/configs/axios.config";
import TableModel from "../models/table.model";

export const getUsers = () => {
  return axiosInstance.get(API.users).then((res) => {
    return res.data.map((item: any) => new TableModel(item));
  });
};
