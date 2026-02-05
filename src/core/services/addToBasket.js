import api from "../config/api";

const addToBasket = async (id) => {
  const res = await api.put(`/basket/${id}`);
  return res.data;
};

export default addToBasket;
