import axios from "axios";

const config = (accessToken) => {
    return { Authorization: `${accessToken}` };
};


export const getDetail = async (id) => {
    const response = await axios.get(`${process.env.REACT_APP_BASEURL}/api/reviews/${id}`);
    return response;
};


export const deleteReview = async (id, accessToken) => {
    const res = await axios.delete(`${process.env.REACT_APP_BASEURL}/api/reviews/${id}`, {
        headers: config(accessToken),
    });
    console.log(res);
    return res;
};
