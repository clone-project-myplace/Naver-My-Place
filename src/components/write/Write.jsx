import { useState, useEffect, useRef } from "react";
import { useMutation, useQueryClient } from "react-query";
import { addReview, uploadPost, uploadPost2 } from "../../axios/api";
import styled from "styled-components";
import axios from "axios";
import { faCameraAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  WriteHeader,
  WriteHeaderTitle,
  MainContainer,
  EmojiContainer,
  EmojiTitle,
  EmojiSubTitle,
  EmojiChoiceContainer,
  EmojiPrice,
  EmojiChoiceBox,
  Textarea,
  ReviewContainer,
  ReviewTitle,
  ReviewLable,
  ReviewBtnTitle,
  ReviewBtnSubTitle,
  WriteHeaderSubTitle,
} from "./style";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getDate } from "../../utils/getDate";
import { createReview, updateReview } from "../../api/getDetail";

function Write() {
  const navigate = useNavigate();
  const { mode } = useParams();
  const location = useLocation();

  if (mode === "edit") {
  }

  if (mode === "create") {
  }

  // TODO : 리팩토링 할떄 useState 딕셔너리로 관리
  // const [files, setFiles] = useState("");
  const [Arr, setArr] = useState([]);
  const [click, setClick] = useState("true");
  const [clickBtn, setClickBtn] = useState("white");

  const [click2, setClick2] = useState("true");
  const [clickBtn2, setClickBtn2] = useState("white");

  const [click3, setClick3] = useState("true");
  const [clickBtn3, setClickBtn3] = useState("white");

  const [click4, setClick4] = useState("true");
  const [clickBtn4, setClickBtn4] = useState("white");

  const [click5, setClick5] = useState("true");
  const [clickBtn5, setClickBtn5] = useState("white");

  const [click6, setClick6] = useState("true");
  const [clickBtn6, setClickBtn6] = useState("white");

  const [click7, setClick7] = useState("true");
  const [clickBtn7, setClickBtn7] = useState("white");

  const [click8, setClick8] = useState("true");
  const [clickBtn8, setClickBtn8] = useState("white");

  const [click9, setClick9] = useState("true");
  const [clickBtn9, setClickBtn9] = useState("white");

  const [click10, setClick10] = useState("true");
  const [clickBtn10, setClickBtn10] = useState("white");

  const [click11, setClick11] = useState("true");
  const [clickBtn11, setClickBtn11] = useState("white");

  const [click12, setClick12] = useState("true");
  const [clickBtn12, setClickBtn12] = useState("white");

  const [click13, setClick13] = useState("true");
  const [clickBtn13, setClickBtn13] = useState("white");

  const [click14, setClick14] = useState("true");
  const [clickBtn14, setClickBtn14] = useState("white");

  const [click15, setClick15] = useState("true");
  const [clickBtn15, setClickBtn15] = useState("white");

  const [click16, setClick16] = useState("true");
  const [clickBtn16, setClickBtn16] = useState("white");

  const Click1 = () => {
    if (click === "false") {
      setClick("true");
      setClickBtn("white");

      const Array = Arr.filter((item) => item !== "K1");

      setArr(Array);
    } else {
      setClick("false");
      setClickBtn("#00CC99");

      setArr([...Arr, "K1"]);
    }
  };

  const Click2 = () => {
    if (click2 === "false") {
      setClick2("true");
      setClickBtn2("white");

      const Array = Arr.filter((item) => item !== "K2");
      setArr(Array);
    } else {
      setClick2("false");
      setClickBtn2("#00CC99");
      setArr([...Arr, "K2"]);
    }
  };

  const Click3 = () => {
    if (click3 === "false") {
      setClick3("true");
      setClickBtn3("white");

      const Array = Arr.filter((item) => item !== "K3");
      setArr(Array);
    } else {
      setClick3("false");
      setClickBtn3("#00CC99");
      setArr([...Arr, "K3"]);
    }
  };

  const Click4 = () => {
    if (click4 === "false") {
      setClick4("true");
      setClickBtn4("white");

      const Array = Arr.filter((item) => item !== "K4");
      setArr(Array);
    } else {
      setClick4("false");
      setClickBtn4("#00CC99");

      setArr([...Arr, "K4"]);
    }
  };

  const Click5 = () => {
    if (click5 === "false") {
      setClick5("true");
      setClickBtn5("white");
      const Array = Arr.filter((item) => item !== "K5");
      setArr(Array);
    } else {
      setClick5("false");
      setClickBtn5("#00CC99");
      setArr([...Arr, "K5"]);
    }
  };

  const Click6 = () => {
    if (click6 === "false") {
      setClick6("true");
      setClickBtn6("white");
      const Array = Arr.filter((item) => item !== "K6");
      setArr(Array);
    } else {
      setClick6("false");
      setClickBtn6("#00CC99");
      setArr([...Arr, "K6"]);
    }
  };

  const Click7 = () => {
    if (click7 === "false") {
      setClick7("true");
      setClickBtn7("white");
      const Array = Arr.filter((item) => item !== "K7");
      setArr(Array);
    } else {
      setClick7("false");
      setClickBtn7("#00CC99");
      setArr([...Arr, "K7"]);
    }
  };

  const Click8 = () => {
    if (click8 === "false") {
      setClick8("true");
      setClickBtn8("white");
      const Array = Arr.filter((item) => item !== "K8");
      setArr(Array);
    } else {
      setClick8("false");
      setClickBtn8("#00CC99");
      setArr([...Arr, "K8"]);
    }
  };

  const Click9 = () => {
    if (click9 === "false") {
      setClick9("true");
      setClickBtn9("white");
      const Array = Arr.filter((item) => item !== "K9");
      setArr(Array);
    } else {
      setClick9("false");
      setClickBtn9("#00CC99");
      setArr([...Arr, "K9"]);
    }
  };

  const Click10 = () => {
    if (click10 === "false") {
      setClick10("true");
      setClickBtn10("white");
      const Array = Arr.filter((item) => item !== "K10");
      setArr(Array);
    } else {
      setClick10("false");
      setClickBtn10("#00CC99");
      setArr([...Arr, "K10"]);
    }
  };

  const Click11 = () => {
    if (click11 === "false") {
      setClick11("true");
      setClickBtn11("white");
      const Array = Arr.filter((item) => item !== "K11");
      setArr(Array);
    } else {
      setClick11("false");
      setClickBtn11("#00CC99");
      setArr([...Arr, "K11"]);
    }
  };

  const Click12 = () => {
    if (click12 === "false") {
      setClick12("true");
      setClickBtn12("white");
      const Array = Arr.filter((item) => item !== "K12");
      setArr(Array);
    } else {
      setClick12("false");
      setClickBtn12("#00CC99");
      setArr([...Arr, "K12"]);
    }
  };

  const Click13 = () => {
    if (click13 === "false") {
      setClick13("true");
      setClickBtn13("white");
      const Array = Arr.filter((item) => item !== "K13");
      setArr(Array);
    } else {
      setClick13("false");
      setClickBtn13("#00CC99");
      setArr([...Arr, "K13"]);
    }
  };

  const Click14 = () => {
    if (click14 === "false") {
      setClick14("true");
      setClickBtn14("white");
      const Array = Arr.filter((item) => item !== "K14");
      setArr(Array);
    } else {
      setClick14("false");
      setClickBtn14("#00CC99");
      setArr([...Arr, "K14"]);
    }
  };

  const Click15 = () => {
    if (click15 === "false") {
      setClick15("true");
      setClickBtn15("white");
      const Array = Arr.filter((item) => item !== "K15");
      setArr(Array);
    } else {
      setClick15("false");
      setClickBtn15("#00CC99");
      setArr([...Arr, "K15"]);
    }
  };

  const Click16 = () => {
    if (click16 === "false") {
      setClick16("true");
      setClickBtn16("white");
      const Array = Arr.filter((item) => item !== "K16");
      setArr(Array);
    } else {
      setClick16("false");
      setClickBtn16("#00CC99");
      setArr([...Arr, "K16"]);
    }
  };

  //Todo : 이미지

  useEffect(() => {
    if (mode === "edit") {
      setArr(location.state.detailData.keywordType);
      for (let i = 0; i < location.state.detailData.keywordType.length; i++) {
        if (location.state.detailData.keywordType[i] === "K1") {
          setClick("false");
          setClickBtn("#00CC99");
        } else if (location.state.detailData.keywordType[i] === "K2") {
          setClick2("false");
          setClickBtn2("#00CC99");
        } else if (location.state.detailData.keywordType[i] === "K3") {
          setClick3("false");
          setClickBtn3("#00CC99");
        } else if (location.state.detailData.keywordType[i] === "K4") {
          setClick4("false");
          setClickBtn4("#00CC99");
        } else if (location.state.detailData.keywordType[i] === "K5") {
          setClick5("false");
          setClickBtn5("#00CC99");
        } else if (location.state.detailData.keywordType[i] === "K6") {
          setClick6("false");
          setClickBtn6("#00CC99");
        } else if (location.state.detailData.keywordType[i] === "K7") {
          setClick7("false");
          setClickBtn7("#00CC99");
        } else if (location.state.detailData.keywordType[i] === "K8") {
          setClick8("false");
          setClickBtn8("#00CC99");
        } else if (location.state.detailData.keywordType[i] === "K9") {
          setClick9("false");
          setClickBtn9("#00CC99");
        } else if (location.state.detailData.keywordType[i] === "K10") {
          setClick10("false");
          setClickBtn10("#00CC99");
        } else if (location.state.detailData.keywordType[i] === "K11") {
          setClick11("false");
          setClickBtn11("#00CC99");
        } else if (location.state.detailData.keywordType[i] === "K12") {
          setClick12("false");
          setClickBtn12("#00CC99");
        } else if (location.state.detailData.keywordType[i] === "K13") {
          setClick13("false");
          setClickBtn13("#00CC99");
        } else if (location.state.detailData.keywordType[i] === "K14") {
          setClick14("false");
          setClickBtn14("#00CC99");
        } else if (location.state.detailData.keywordType[i] === "K15") {
          setClick15("false");
          setClickBtn15("#00CC99");
        }
      }
    }
  }, []);

  //Todo : 리뷰 작성
  const queryClient = useQueryClient();
  const mutation = useMutation(uploadPost2, {
    onSuccess: () => {
      queryClient.invalidateQueries("getReview");
    },
  });

  const fileInput = useRef(null);

  const [reviewContent, setReviewContent] = useState("");
  const [newimage, setNewImage] = useState("");
  const [file, setFile] = useState("");

  const onReviewContentHandler = (event) => {
    setReviewContent(event.currentTarget.value);
  };

  const onImgPostHandler = (event) => {
    setNewImage([]);
    for (let i = 0; i < event.target.files.length; i++) {
      setFile(event.target.files[i]);
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[i]);
      reader.addEventListener("loaded", (event) => {
        newimage.src = event.target.result;
      });
      reader.onloadend = () => {
        const base = reader.result;
        if (base) {
          const baseSub = base.toString();
          setNewImage((newimage) => [...newimage, baseSub]);
        }
      };
    }
  };
  const formData = new FormData();

  const accessToken = window.localStorage.getItem("accessToken");
  const mutationCreate = useMutation(() =>
    createReview(location.state.item.visitedRestaurantId, formData, accessToken)
  );

  const mutationUpdate = useMutation(
    () =>
      updateReview(location.state.detailData.reviewId, formData, accessToken),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("getReview");
      },
    }
  );

  const onSubmitPostHandler = async (event) => {
    if (mode === "create") {
      event.preventDefault();
      const restaurantId = location.state.item.visitedRestaurantId;

      formData.append("reviewKeywordList", Arr);
      formData.append("reviewPhotoUrl", file);
      formData.append("reviewContents", reviewContent);

      mutationCreate.mutate(restaurantId, formData);

      // TODO : navigate위치 작성하기
      navigate("/");
    } else {
      event.preventDefault();

      const reviewId = location.state.detailData.reviewId;

      formData.append("contents", reviewContent);
      // formData.set("contents", reviewContent);

      mutationUpdate.mutate(reviewId, formData);

      navigate("/detail/" + reviewId);
    }
  };

  return (
    <MainContainer>
      {mode === "edit" ? (
        <WriteHeader>
          <WriteHeaderTitle>
            {location.state.detailData.restaurantName}
          </WriteHeaderTitle>
          <WriteHeaderSubTitle>
            {getDate(location.state.detailData.createdDate)}
          </WriteHeaderSubTitle>
        </WriteHeader>
      ) : (
        <WriteHeader>
          <WriteHeaderTitle>
            {location.state.visitedRestaurantName}
          </WriteHeaderTitle>
          <WriteHeaderSubTitle>
            {location.state.visitedDate}
          </WriteHeaderSubTitle>
        </WriteHeader>
      )}

      <EmojiContainer>
        <EmojiTitle>어떤 점이 좋았나요?</EmojiTitle>
        <EmojiSubTitle>이 장소에 어울리는 키워드를 골라주세요.</EmojiSubTitle>

        <EmojiChoiceContainer>
          <EmojiPrice>
            <div>음식/가격</div>
            {mode === "edit" ? (
              clickBtn === "#00CC99" ? (
                <EmojiChoiceBox
                  emoji="🍰"
                  textColor="white"
                  btnColor={clickBtn}
                  fontWeight="600"
                  text="디저트가 맛있어요"
                />
              ) : (
                <EmojiChoiceBox
                  emoji="🍰"
                  textColor="white"
                  fontWeight="600"
                  btnColor="gray"
                  text="디저트가 맛있어요"
                />
              )
            ) : clickBtn === "#00CC99" ? (
              <EmojiChoiceBox
                emoji="🍰"
                textColor="white"
                btnColor={clickBtn}
                onClick={Click1}
                fontWeight="600"
                text="디저트가 맛있어요"
              />
            ) : (
              <EmojiChoiceBox
                emoji="🍰"
                textColor="black"
                btnColor={clickBtn}
                onClick={Click1}
                text="디저트가 맛있어요"
              />
            )}

            {mode === "edit" ? (
              clickBtn2 === "#00CC99" ? (
                <EmojiChoiceBox
                  emoji="🪙"
                  textColor="white"
                  btnColor={clickBtn2}
                  fontWeight="600"
                  text="가성비가 좋아요"
                  disabled
                />
              ) : (
                <EmojiChoiceBox
                  emoji="🪙"
                  textColor="white"
                  fontWeight="600"
                  btnColor="gray"
                  text="가성비가 좋아요"
                />
              )
            ) : clickBtn2 === "#00CC99" ? (
              <EmojiChoiceBox
                emoji="🪙"
                textColor="white"
                btnColor={clickBtn2}
                onClick={Click2}
                fontWeight="600"
                text="가성비가 좋아요"
              />
            ) : (
              <EmojiChoiceBox
                emoji="🪙"
                textColor="black"
                btnColor={clickBtn2}
                onClick={Click2}
                text="가성비가 좋아요"
              />
            )}
            {/*  */}
            {mode === "edit" ? (
              clickBtn3 === "#00CC99" ? (
                <EmojiChoiceBox
                  emoji="🍹"
                  textColor="white"
                  btnColor={clickBtn3}
                  fontWeight="600"
                  text="음료가 맛있어요"
                />
              ) : (
                <EmojiChoiceBox
                  emoji="🍹"
                  textColor="white"
                  fontWeight="600"
                  btnColor="gray"
                  text="음료가 맛있어요"
                />
              )
            ) : clickBtn3 === "#00CC99" ? (
              <EmojiChoiceBox
                emoji="🍹"
                textColor="white"
                btnColor={clickBtn3}
                onClick={Click3}
                fontWeight="600"
                text="음료가 맛있어요"
              />
            ) : (
              <EmojiChoiceBox
                emoji="🍹"
                textColor="black"
                btnColor={clickBtn3}
                onClick={Click3}
                text="음료가 맛있어요"
              />
            )}
            {/*  */}
            {mode === "edit" ? (
              clickBtn4 === "#00CC99" ? (
                <EmojiChoiceBox
                  emoji="👨‍🍳"
                  textColor="white"
                  btnColor={clickBtn4}
                  fontWeight="600"
                  text="특별한 메뉴가 있어요"
                />
              ) : (
                <EmojiChoiceBox
                  emoji="👨‍🍳"
                  textColor="white"
                  fontWeight="600"
                  btnColor="gray"
                  text="특별한 메뉴가 있어요"
                />
              )
            ) : clickBtn4 === "#00CC99" ? (
              <EmojiChoiceBox
                emoji="👨‍🍳"
                textColor="white"
                btnColor={clickBtn4}
                onClick={Click4}
                fontWeight="600"
                text="특별한 메뉴가 있어요"
              />
            ) : (
              <EmojiChoiceBox
                emoji="👨‍🍳"
                textColor="black"
                btnColor={clickBtn4}
                onClick={Click4}
                text="특별한 메뉴가 있어요"
              />
            )}
            {/*  */}
            {mode === "edit" ? (
              clickBtn5 === "#00CC99" ? (
                <EmojiChoiceBox
                  emoji="☕"
                  textColor="white"
                  btnColor={clickBtn5}
                  fontWeight="600"
                  text="커피가 맛있어요"
                />
              ) : (
                <EmojiChoiceBox
                  emoji="☕"
                  textColor="white"
                  fontWeight="600"
                  btnColor="gray"
                  text="커피가 맛있어요"
                />
              )
            ) : clickBtn5 === "#00CC99" ? (
              <EmojiChoiceBox
                emoji="☕"
                textColor="white"
                btnColor={clickBtn5}
                onClick={Click5}
                fontWeight="600"
                text="커피가 맛있어요"
              />
            ) : (
              <EmojiChoiceBox
                emoji="☕"
                textColor="black"
                btnColor={clickBtn5}
                onClick={Click5}
                text="커피가 맛있어요"
              />
            )}
            {/*  */}
          </EmojiPrice>

          <EmojiPrice>
            <div>분위기</div>
            {/* 6th */}
            {mode === "edit" ? (
              clickBtn6 === "#00CC99" ? (
                <EmojiChoiceBox
                  emoji="😀"
                  textColor="white"
                  btnColor={clickBtn6}
                  fontWeight="600"
                  text="대화하기 좋아요"
                />
              ) : (
                <EmojiChoiceBox
                  emoji="😀"
                  textColor="white"
                  fontWeight="600"
                  btnColor="gray"
                  text="대화하기 좋아요"
                />
              )
            ) : clickBtn6 === "#00CC99" ? (
              <EmojiChoiceBox
                emoji="😀"
                textColor="white"
                btnColor={clickBtn6}
                onClick={Click6}
                fontWeight="600"
                text="대화하기 좋아요"
              />
            ) : (
              <EmojiChoiceBox
                emoji="😀"
                textColor="black"
                btnColor={clickBtn6}
                onClick={Click6}
                text="대화하기 좋아요"
              />
            )}

            {/* 7th */}
            {mode === "edit" ? (
              clickBtn7 === "#00CC99" ? (
                <EmojiChoiceBox
                  emoji="🪟"
                  textColor="white"
                  btnColor={clickBtn7}
                  fontWeight="600"
                  text="뷰가 좋아요"
                />
              ) : (
                <EmojiChoiceBox
                  emoji="🪟"
                  textColor="white"
                  fontWeight="600"
                  btnColor="gray"
                  text="뷰가 좋아요"
                />
              )
            ) : clickBtn7 === "#00CC99" ? (
              <EmojiChoiceBox
                emoji="🪟"
                textColor="white"
                btnColor={clickBtn7}
                onClick={Click7}
                fontWeight="600"
                text="뷰가 좋아요"
              />
            ) : (
              <EmojiChoiceBox
                emoji="🪟"
                textColor="black"
                btnColor={clickBtn7}
                onClick={Click7}
                text="뷰가 좋아요"
              />
            )}

            {/* 8th */}

            {mode === "edit" ? (
              clickBtn8 === "#00CC99" ? (
                <EmojiChoiceBox
                  emoji="📷"
                  textColor="white"
                  btnColor={clickBtn8}
                  fontWeight="600"
                  text="사진이 잘 나와요"
                />
              ) : (
                <EmojiChoiceBox
                  emoji="📷"
                  textColor="white"
                  fontWeight="600"
                  btnColor="gray"
                  text="사진이 잘 나와요"
                />
              )
            ) : clickBtn8 === "#00CC99" ? (
              <EmojiChoiceBox
                emoji="📷"
                textColor="white"
                btnColor={clickBtn8}
                onClick={Click8}
                fontWeight="600"
                text="사진이 잘 나와요"
              />
            ) : (
              <EmojiChoiceBox
                emoji="📷"
                textColor="black"
                btnColor={clickBtn8}
                onClick={Click8}
                text="사진이 잘 나와요"
              />
            )}
            {/* 9th */}

            {mode === "edit" ? (
              clickBtn9 === "#00CC99" ? (
                <EmojiChoiceBox
                  emoji="🪑"
                  textColor="white"
                  btnColor={clickBtn9}
                  fontWeight="600"
                  text="인테리어가 멋져요"
                />
              ) : (
                <EmojiChoiceBox
                  emoji="🪑"
                  textColor="white"
                  fontWeight="600"
                  btnColor="gray"
                  text="인테리어가 멋져요"
                />
              )
            ) : clickBtn9 === "#00CC99" ? (
              <EmojiChoiceBox
                emoji="🪑"
                textColor="white"
                btnColor={clickBtn9}
                onClick={Click9}
                fontWeight="600"
                text="인테리어가 멋져요"
              />
            ) : (
              <EmojiChoiceBox
                emoji="🪑"
                textColor="black"
                btnColor={clickBtn9}
                onClick={Click9}
                text="인테리어가 멋져요"
              />
            )}

            {/* 10th */}

            {mode === "edit" ? (
              clickBtn10 === "#00CC99" ? (
                <EmojiChoiceBox
                  emoji="💻"
                  textColor="white"
                  btnColor={clickBtn10}
                  fontWeight="600"
                  text="집중하기 좋아요"
                />
              ) : (
                <EmojiChoiceBox
                  emoji="💻"
                  textColor="white"
                  fontWeight="600"
                  btnColor="gray"
                  text="집중하기 좋아요"
                />
              )
            ) : clickBtn10 === "#00CC99" ? (
              <EmojiChoiceBox
                emoji="💻"
                textColor="white"
                btnColor={clickBtn10}
                onClick={Click10}
                fontWeight="600"
                text="집중하기 좋아요"
              />
            ) : (
              <EmojiChoiceBox
                emoji="💻"
                textColor="black"
                btnColor={clickBtn10}
                onClick={Click10}
                text="집중하기 좋아요"
              />
            )}
          </EmojiPrice>

          <EmojiPrice>
            <div>편의시설/기타</div>

            {/* 11th */}

            {mode === "edit" ? (
              clickBtn11 === "#00CC99" ? (
                <EmojiChoiceBox
                  emoji="🚻"
                  textColor="white"
                  btnColor={clickBtn11}
                  fontWeight="600"
                  text="화장실이 깨끗해요"
                />
              ) : (
                <EmojiChoiceBox
                  emoji="🚻"
                  textColor="white"
                  fontWeight="600"
                  btnColor="gray"
                  text="화장실이 깨끗해요"
                />
              )
            ) : clickBtn11 === "#00CC99" ? (
              <EmojiChoiceBox
                emoji="🚻"
                textColor="white"
                btnColor={clickBtn11}
                onClick={Click11}
                fontWeight="600"
                text="화장실이 깨끗해요"
              />
            ) : (
              <EmojiChoiceBox
                emoji="🚻"
                textColor="black"
                btnColor={clickBtn11}
                onClick={Click11}
                text="화장실이 깨끗해요"
              />
            )}

            {/* 12th */}
            {mode === "edit" ? (
              clickBtn12 === "#00CC99" ? (
                <EmojiChoiceBox
                  emoji="🛌🏻"
                  textColor="white"
                  btnColor={clickBtn12}
                  fontWeight="600"
                  text="좌석이 편해요"
                />
              ) : (
                <EmojiChoiceBox
                  emoji="🛌🏻"
                  textColor="white"
                  fontWeight="600"
                  btnColor="gray"
                  text="좌석이 편해요"
                />
              )
            ) : clickBtn12 === "#00CC99" ? (
              <EmojiChoiceBox
                emoji="🛌🏻"
                textColor="white"
                btnColor={clickBtn12}
                onClick={Click12}
                fontWeight="600"
                text="좌석이 편해요"
              />
            ) : (
              <EmojiChoiceBox
                emoji="🛌🏻"
                textColor="black"
                btnColor={clickBtn12}
                onClick={Click12}
                text="좌석이 편해요"
              />
            )}

            {/* 13th */}
            {mode === "edit" ? (
              clickBtn13 === "#00CC99" ? (
                <EmojiChoiceBox
                  emoji="✨"
                  textColor="white"
                  btnColor={clickBtn13}
                  fontWeight="600"
                  text="매장이 청결해요"
                />
              ) : (
                <EmojiChoiceBox
                  emoji="✨"
                  textColor="white"
                  fontWeight="600"
                  btnColor="gray"
                  text="매장이 청결해요"
                />
              )
            ) : clickBtn13 === "#00CC99" ? (
              <EmojiChoiceBox
                emoji="✨"
                textColor="white"
                btnColor={clickBtn13}
                onClick={Click13}
                fontWeight="600"
                text="매장이 청결해요"
              />
            ) : (
              <EmojiChoiceBox
                emoji="✨"
                textColor="black"
                btnColor={clickBtn13}
                onClick={Click13}
                text="매장이 청결해요"
              />
            )}

            {/* 14th */}
            {mode === "edit" ? (
              clickBtn14 === "#00CC99" ? (
                <EmojiChoiceBox
                  emoji="🅿️"
                  textColor="white"
                  btnColor={clickBtn14}
                  fontWeight="600"
                  text="주차하기 편해요"
                />
              ) : (
                <EmojiChoiceBox
                  emoji="🅿️"
                  textColor="white"
                  fontWeight="600"
                  btnColor="gray"
                  text="주차하기 편해요"
                />
              )
            ) : clickBtn14 === "#00CC99" ? (
              <EmojiChoiceBox
                emoji="🅿️"
                textColor="white"
                btnColor={clickBtn14}
                onClick={Click14}
                fontWeight="600"
                text="주차하기 편해요"
              />
            ) : (
              <EmojiChoiceBox
                emoji="🅿️"
                textColor="black"
                btnColor={clickBtn14}
                onClick={Click14}
                text="주차하기 편해요"
              />
            )}

            {/* 15th */}
            {mode === "edit" ? (
              clickBtn15 === "#00CC99" ? (
                <EmojiChoiceBox
                  emoji="❤️"
                  textColor="white"
                  btnColor={clickBtn15}
                  fontWeight="600"
                  text="친절해요"
                />
              ) : (
                <EmojiChoiceBox
                  emoji="❤️"
                  textColor="white"
                  fontWeight="600"
                  btnColor="gray"
                  text="친절해요"
                />
              )
            ) : clickBtn15 === "#00CC99" ? (
              <EmojiChoiceBox
                emoji="❤️"
                textColor="white"
                btnColor={clickBtn15}
                onClick={Click15}
                fontWeight="600"
                text="친절해요"
              />
            ) : (
              <EmojiChoiceBox
                emoji="❤️"
                textColor="black"
                btnColor={clickBtn15}
                onClick={Click15}
                text="친절해요"
              />
            )}
          </EmojiPrice>

          <EmojiPrice>
            {/* {clickBtn16 === '#00CC99' ? <EmojiChoiceBox emoji="🍰" textColor="white" btnColor={clickBtn16} onClick={Click16}  fontWeight="600" text="디저트가 맛있어요"/> : <EmojiChoiceBox emoji="🍰" textColor="black" btnColor={clickBtn16} onClick={Click16}  text="디저트가 맛있어요" />} */}
          </EmojiPrice>
        </EmojiChoiceContainer>
      </EmojiContainer>
      <form onSubmit={onSubmitPostHandler} encType="multipart/form-data">
        <ReviewContainer>
          <ReviewTitle>리뷰를 남겨주세요</ReviewTitle>

          {mode === "edit" ? (
            <ReviewLable htmlFor="input-file">
              <FontAwesomeIcon color="gray" icon={faCameraAlt} />
              <ReviewBtnTitle style={{ color: "gray" }}>
                사진추가
              </ReviewBtnTitle>
              <ReviewBtnSubTitle>업로드 완료</ReviewBtnSubTitle>
            </ReviewLable>
          ) : (
            <ReviewLable htmlFor="input-file">
              <FontAwesomeIcon icon={faCameraAlt} />
              <ReviewBtnTitle>사진추가</ReviewBtnTitle>
              <ReviewBtnSubTitle>최대 1장</ReviewBtnSubTitle>
            </ReviewLable>
          )}

          {mode === "edit" ? (
            <input
              id="input-file"
              type="file"
              accept="img/*"
              onChange={onImgPostHandler}
              ref={fileInput}
              style={{ display: "none" }}
              disabled="disabled"
            />
          ) : (
            <input
              id="input-file"
              type="file"
              accept="img/*"
              onChange={onImgPostHandler}
              ref={fileInput}
              style={{ display: "none" }}
            />
          )}
        </ReviewContainer>

        {mode === "edit" ? (
          <ImgBox src={location.state.detailData?.reviewImgUrl} alt="img" />
        ) : file.length !== 0 ? (
          <ImgBox src={newimage} alt="img" />
        ) : (
          <div></div>
        )}

        <div>
          {mode === "edit" ? (
            <Textarea
              placeholder="내용을 적어주세요"
              onChange={onReviewContentHandler}
            />
          ) : (
            <Textarea
              placeholder="내용을 적어주세요"
              onChange={onReviewContentHandler}
              value={reviewContent}
            />
          )}
        </div>
        <BtnContainer>
          <Button>등록하기</Button>
        </BtnContainer>
      </form>
    </MainContainer>
  );
}

export default Write;

const ImgBox = styled.img`
  min-width: 200px;
  min-height: 200px;
  max-width: 200px;
  max-height: 200px;
  background-color: #ebebeb;
  align-items: center;
  margin-bottom: 50px;
  object-fit: cover;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 50px;
  background-color: #00cc99;
  color: white;
  font-size: 20px;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  margin-top: 50px;
  cursor: pointer;
`;
