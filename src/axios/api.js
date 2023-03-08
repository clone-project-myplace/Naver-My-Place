import axios from "axios";
import instance from "./instance";

// const SERVER_URI = "http://localhost:4000";
const SERVER_URI = "http://3.35.55.3:8080";

const accessToken = localStorage.getItem("accessToken");
const baseURL = axios.create({
  baseURL: `${process.env.REACT_APP_BASEURL}`,
  headers: {
    "Access-Control-Allow-Origin": "*",
    Authorization: accessToken,
  },
});

const uploadPost2 = async (formData) => {
  try {
    const response = await baseURL.post(
      "/api/reviews/restaurants/1",
      formData,
      {
        headers: {
          "Content-Type": `multipart/form-data; `,
        },
      }
    );
    return response;
  } catch {
    alert("작성 오류입니다!");
  }
};

export { uploadPost2 };


export const uploadProfile = async (formData) => {
  try {
      const response = await baseURL.post(
          "/api/members/profile",
          formData,
          {
              headers: {
                  "Content-Type": `multipart/form-data; `,
              },
          }
      );
      return response;
  } catch {
      alert("작성 오류입니다!");
  }
};