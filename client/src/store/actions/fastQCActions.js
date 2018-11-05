
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


export const submitNewFastQC = (fastQCData) => {
    return dispatch => {
        return fetch(URL + '/pipline/UploadFastQC', options(fastQCData))
        .then(res => res.json())
    }
};
