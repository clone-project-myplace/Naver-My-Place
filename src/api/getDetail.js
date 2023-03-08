import axios from "axios";

const config = (accessToken) => {
    return { Authorization: `${accessToken}` };
};


export const deleteReview = async (id, accessToken) => {
    const res = await axios.delete(
        `${process.env.REACT_APP_BASEURL}/api/reviews/${id}`,
        {
            headers: config(accessToken),
        }
    );
    console.log(res);
    return res;
};

export const likeReview = async (id, accessToken) => {
    const res = await axios.put(
        `${process.env.REACT_APP_BASEURL}/api/reviews/likes/${id}`,
        {},
        {
            headers: config(accessToken),
        }
    );
    return res;
};
