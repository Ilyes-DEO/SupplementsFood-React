import axios from 'axios';
import { Supplements, Category } from './SupplementInterfaces'; 

export const loginAndGetToken = () => {
  return axios
    .post(
      "http://127.0.0.1:8741/api/login_check",
      { email: "ilyes@email.com", password: "1234" },
      { headers: { "Content-Type": "application/json" } }
    )
    .then((res) => res.data.token);
};

export const fetchSupplementsList = (token: string): Promise<Supplements[]> => {
  return axios
    .get("http://127.0.0.1:8741/api/supplements", {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then((res) => res.data);
};

export const fetchCategoryList = (token: string): Promise<Category[]> => {
  return axios
    .get("http://127.0.0.1:8741/api/category", {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then((res) => res.data)
};

export const fetchSupplementDetails = (token: string, id: number): Promise<Supplements> => {
  return axios
    .get(`http://127.0.0.1:8741/api/supplements/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then((res) => res.data);
};
