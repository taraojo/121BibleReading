const API_HOST = "http://biblemate.hack/api/v1";

const makeRequest = async (url, options) => {
  const raw = await fetch(url, options);
  const response = await raw.json();
  return response.payload;
};

/**
 *
 * @param {number} id
 */
const getPlan = async id => {
  return await makeRequest(`${API_HOST}/get_plan/${id}`);
};

/**
 *
 * @param {number} scenario
 * 0, 1, 2
 */
const getPlans = async scenario => {
  return await makeRequest(`${API_HOST}/get_plans/${scenario}`);
};

/**
 *
 * @param {number} id
 */
const getStudy = async id => {
  return await makeRequest(`${API_HOST}/get_study/${id}`);
};

/**
 *
 * @param {number} id
 * this is the id of the plan we are wanting to start a plan for
 */
const startPlan = async id => {
  return await makeRequest(`${API_HOST}/start_plan/${id}`, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({})
  });
};

/**
 *
 * @param {string} book
 * @param {array} verses
 * verses is an array of strings e.g. "1:1-2", "9:3"
 * its POST because its simpler to throw more complex requests
 * as well as otherwise we would be pretty much using exactly the same
 * api bible api the server is using
 */
const getBible = async (book, verses) => {
  const response = await fetch(`${API_HOST}/bible/${book}`, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify(verses)
  });
  return response.json().payload;
};

export default {
  getPlan,
  getPlans,
  getStudy,
  startPlan
};
