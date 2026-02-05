import api from "../config/api";

const order = async (payload) => {
  const res = await api.post("/order", payload);
  return res.data;
};

export default order;
