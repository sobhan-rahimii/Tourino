import api from "../config/api";

const getUserBasket = async () => {
  const res = await api.get("/basket");
  return res?.data;
};

export default getUserBasket;
