import api from "../config/api";

const editProfile = async (data) => {
  const res = await api.put("/user/profile", data);
  return res.data;
};

export default editProfile;
