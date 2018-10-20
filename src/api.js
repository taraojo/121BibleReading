const API_HOST = "http://localhost/api/v1";

const setContext = () => {};

const getPlan = async id => {
  const response = await fetch(`${API_HOST}/get_plan/${id}`);
  return response.json().payload;
};

const getStudy = async id => {
  const response = await fetch(`${API_HOST}/get_study/${id}`);
  return response.json().payload;
};

const startPlan = async id => {
  const response = await fetch(`${API_HOST}/start_plan/${id}`, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({})
  });
  return response.json().payload;
};

export default {
  setContext,
  getPlan,
  getStudy,
  startPlan
};
