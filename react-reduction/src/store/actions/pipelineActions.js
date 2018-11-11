
const URL = "http://localhost:5000";
const options = (data) => {
    return {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('jwtToken'),
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify(data)
    };
};



export const uploadFastQC = (fastQCData) => {
  return dispatch => {
      return fetch(URL + '/pipeline/UploadFastQC', options(fastQCData));
  }
};
