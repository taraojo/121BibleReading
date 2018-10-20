
/**
 * 
 * @param {number} id 
 */
const getPlan = async id => {
  const response = await fetch(`${process.API_HOST}/get_plan/${id}`);
  return response.json().payload;
// =======
// const FAKE_RESULT_RESPONSE = {
//   name: "Mark",
//   description:
//     "Discover who Jesus said he is and think about how characters in the Bible reacted to his message",
//   difficulty: "Easy",
//   averageTime: "30 mins",
//   id: "0000"
// };

// const getPlan = async id => {
//   // const response = await fetch(`${API_HOST}/get_plan/${id}`);
//   // return response.json().payload;
//   return Promise.resolve(FAKE_RESULT_RESPONSE);
// >>>>>>> 6ed97bed9705c48eb37496a9c0d0ceee692e808c
};

/**
 * 
 * @param {number} scenario
 * 0, 1, 2
 */
const getPlans = async scenario =>{
  const response = await fetch(`${process.API_HOST}/get_plans/${scenario}`);
  return response.json().payload;
}

/**
 * returns the study
 * @param {string} id code
 */
const getCurrentStudy = async id =>{
  const response = await fetch(`${process.API_HOST}/get_current_study/${id}`);
  return response.json().payload; 
}

/**
 * 
 * @param {number} id 
 */
const getStudy = async id => {
  const response = await fetch(`${process.API_HOST}/get_study/${id}`);
  return response.json().payload;
};

/**
 * 
 * @param {number} id 
 * this is the id of the plan we are wanting to start a plan for
 */
const startPlan = async id => {
  const response = await fetch(`${process.API_HOST}/start_plan/${id}`, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({})
  });
  return response.json().payload;
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
  const response = await fetch(`${process.API_HOST}/bible/${book}`, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify(verses)
  });
  return response.json().payload;
};


/**
 * 
 * @param {number} id of the study
 * @param {string} code plan instance
 */
const getBible = async (id, code) => {
  const response = await fetch(`${process.API_HOST}/bible/${id}`, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify(code)
  });
  return response.json().payload;
};


export default {
  getPlan,
  get_plans,
  getStudy,
  startPlan
};
