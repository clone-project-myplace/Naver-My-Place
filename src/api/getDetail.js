import axios from "axios";

// const makeHeaders = (accessToken) => {
//     return { Authorization: `Bearer  ${accessToken}` };
// };

const token = window.localStorage.getItem("token"); 

//test용 localhost:4000
export const getDetail = async (id) => {
    const response = await axios.get(`http://localhost:4000/reviews/${id}`);
    return response;
};

export const deleteReview = async (id, accessToken) => {
    // const res = await axios.delete(`http://localhost:4000/reviews/${id}`, {
    //     headers: { authorization: token},
    // });
    // return res;
};

