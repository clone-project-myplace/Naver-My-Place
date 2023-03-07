import axios from "axios";

const config = (accessToken) => {
    return { Authorization: `Bearer  ${accessToken}` };
};


export const getDetail = async (id) => {
    // const response = await axios.get(`http://localhost:4000/reviews/${id}`);
    // return response;
};


export const deleteReview = async (id, accessToken) => {
    // const res = await axios.delete(`http://localhost:4000/reviews/${id}`, {
    //     headers: config(accessToken),
    // });
    // return res;
};
