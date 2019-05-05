import { getSession, getAuthreSource, API } from "@/config/req";

export const getCheckCode = ({ commit }) => {
  getSession().then(res => {
    const checkCodeSrc = `${API.getCheckCodeUrl}?nocache=${Date.now()}&iCIFID=${
      res.data.header.iCIFID
    }`;
    commit("setCheckCode", checkCodeSrc);
  });
};

export const setCstInfo = ({ commit }, value) => {
  commit("setCstInfo", value);
};

export const setInitBaseInfo = ({ commit }) => {
  getAuthreSource().then(res => {
    const { body } = res.data;
    commit("setInitBaseInfo", body);
  });
};
