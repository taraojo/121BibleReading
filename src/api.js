const API_HOST = "http://localhost/api/v1";

const setContext = () => {};

const FAKE_RESULT_RESPONSE = {
  name: "Mark",
  description:
    "Discover who Jesus said he is and think about how characters in the Bible reacted to his message",
  difficulty: "Easy",
  averageTime: "30 mins",
  id: "0000"
};

const getPlan = async id => {
  // const response = await fetch(`${API_HOST}/get_plan/${id}`);
  // return response.json().payload;
  return Promise.resolve(FAKE_RESULT_RESPONSE);
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
