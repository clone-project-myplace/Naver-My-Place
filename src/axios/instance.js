import axios from "axios";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_BASEURL}`,
  headers: {
    // Authorization: accessToken,
    // "Content-Type": "application/json",
    // "Content-Type": "multipart/form-data",
  },
});

instance.interceptors.request.use(
  //요청을 보내기 전 수행
  function (config) {
    // 토큰을 요청이 시작될 때 가져옴
    const accessToken = localStorage.getItem("accessToken");
    console.log("로컬의 토큰값 확인", accessToken);
    // 요청 config headers에 토큰을 넣어 줌
    config.headers["Authorization"] = accessToken;
    return config;
  },

  // 오류 요청을 보내기 전 수행
  function (error) {
    console.log("데이터 보내는중 오류!");
    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  //서버로부터 정상 응답을 받는 경우
  function (config) {
    console.log("데이터 수신 완료");
    const accessToken = localStorage.getItem("ACCESS_TOKEN");
    config.headers["Authorization"] = accessToken;

    return config;
  },

  // //서버로부터 오류 응답을 받은 경우
  function (error) {
    if (error.response.status === 401) {
      window.alert("인증이 필요합니다. 다시 로그인 하세요.");
    }
    return Promise.reject(error);
  }
);

export default instance;
