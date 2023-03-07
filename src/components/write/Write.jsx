import { useState, useEffect, useRef } from "react";
import { useMutation, useQueryClient } from "react-query";
import { addReview, uploadPost, uploadPost2 } from "../../axios/api";
import styled from "styled-components";
import axios from "axios";

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
} from "./style";

function Write() {
  //이중 for

  const [Arr, setArr] = useState([]);
  const [files, setFiles] = useState("");

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

  //Todo : 리뷰 작성
  const queryClient = useQueryClient();
  const mutation = useMutation(uploadPost2, {
    onSuccess: () => {
      // queryClient.invalidateQueries("reviews");
    },
  });

  const fileInput = useRef(null);
  const onImgButton = (event) => {
    event.preventDefault();
    fileInput.current.click();
  };

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

  const onSubmitPostHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append("reviewKeywordList", Arr);
    formData.append("reviewPhotoUrl", file);
    formData.append("reviewContents", reviewContent);
    console.log("Arr", Arr);
    console.log("file", file);
    console.log("reviewContent", reviewContent);

    // console.log(
    //   "formData.get(reviewKeywordList)",
    //   formData.get("reviewKeywordList")
    // );
    // console.log("formData.get(reviewPhotoUrl)", formData.get("reviewPhotoUrl"));
    // console.log("formData.get(reviewContents)", formData.get("reviewContents"));

    mutation.mutate(formData);
    // alert("업로드 완료!");
  };
  console.log(Arr);

  return (
    <MainContainer>
      <WriteHeader>
        <WriteHeaderTitle>스타벅스 이수 자이점</WriteHeaderTitle>
        <div>2023.03.03 (금)</div>
        <div>따뜻한 아이스 아메리카노</div>
      </WriteHeader>

      <EmojiContainer>
        <EmojiTitle>어떤 점이 좋았나요?</EmojiTitle>
        <EmojiSubTitle>이 장소에 어울리는 키워드를 골라주세요.</EmojiSubTitle>

        <EmojiChoiceContainer>
          <EmojiPrice>
            <div>음식/가격</div>
            {clickBtn === "#00CC99" ? (
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
            {clickBtn2 === "#00CC99" ? (
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
            {clickBtn3 === "#00CC99" ? (
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
            {clickBtn4 === "#00CC99" ? (
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
            {clickBtn5 === "#00CC99" ? (
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
          </EmojiPrice>

          <EmojiPrice>
            <div>분위기</div>
            {clickBtn6 === "#00CC99" ? (
              <EmojiChoiceBox
                emoji="🍰"
                textColor="white"
                btnColor={clickBtn6}
                onClick={Click6}
                fontWeight="600"
                text="대화하기 좋아요"
              />
            ) : (
              <EmojiChoiceBox
                emoji="🍰"
                textColor="black"
                btnColor={clickBtn6}
                onClick={Click6}
                text="대화하기 좋아요"
              />
            )}
            {clickBtn7 === "#00CC99" ? (
              <EmojiChoiceBox
                emoji="🪙"
                textColor="white"
                btnColor={clickBtn7}
                onClick={Click7}
                fontWeight="600"
                text="뷰가 좋아요"
              />
            ) : (
              <EmojiChoiceBox
                emoji="🪙"
                textColor="black"
                btnColor={clickBtn7}
                onClick={Click7}
                text="뷰가 좋아요"
              />
            )}
            {clickBtn8 === "#00CC99" ? (
              <EmojiChoiceBox
                emoji="🍹"
                textColor="white"
                btnColor={clickBtn8}
                onClick={Click8}
                fontWeight="600"
                text="사진이 잘 나와요"
              />
            ) : (
              <EmojiChoiceBox
                emoji="🍹"
                textColor="black"
                btnColor={clickBtn8}
                onClick={Click8}
                text="사진이 잘 나와요"
              />
            )}
            {clickBtn9 === "#00CC99" ? (
              <EmojiChoiceBox
                emoji="👨‍🍳"
                textColor="white"
                btnColor={clickBtn9}
                onClick={Click9}
                fontWeight="600"
                text="인테리어가 멋져요"
              />
            ) : (
              <EmojiChoiceBox
                emoji="👨‍🍳"
                textColor="black"
                btnColor={clickBtn9}
                onClick={Click9}
                text="인테리어가 멋져요"
              />
            )}
            {clickBtn10 === "#00CC99" ? (
              <EmojiChoiceBox
                emoji="☕"
                textColor="white"
                btnColor={clickBtn10}
                onClick={Click10}
                fontWeight="600"
                text="집중하기 좋아요"
              />
            ) : (
              <EmojiChoiceBox
                emoji="☕"
                textColor="black"
                btnColor={clickBtn10}
                onClick={Click10}
                text="집중하기 좋아요"
              />
            )}
          </EmojiPrice>

          <EmojiPrice>
            <div>편의시설/기타</div>
            {clickBtn11 === "#00CC99" ? (
              <EmojiChoiceBox
                emoji="🍰"
                textColor="white"
                btnColor={clickBtn11}
                onClick={Click11}
                fontWeight="600"
                text="화장실이 깨끗해요"
              />
            ) : (
              <EmojiChoiceBox
                emoji="🍰"
                textColor="black"
                btnColor={clickBtn11}
                onClick={Click11}
                text="화장실이 깨끗해요"
              />
            )}
            {clickBtn12 === "#00CC99" ? (
              <EmojiChoiceBox
                emoji="🪙"
                textColor="white"
                btnColor={clickBtn12}
                onClick={Click12}
                fontWeight="600"
                text="좌석이 편해요"
              />
            ) : (
              <EmojiChoiceBox
                emoji="🪙"
                textColor="black"
                btnColor={clickBtn12}
                onClick={Click12}
                text="좌석이 편해요"
              />
            )}
            {clickBtn13 === "#00CC99" ? (
              <EmojiChoiceBox
                emoji="🍹"
                textColor="white"
                btnColor={clickBtn13}
                onClick={Click13}
                fontWeight="600"
                text="매장이 청결해요"
              />
            ) : (
              <EmojiChoiceBox
                emoji="🍹"
                textColor="black"
                btnColor={clickBtn13}
                onClick={Click13}
                text="매장이 청결해요"
              />
            )}
            {clickBtn14 === "#00CC99" ? (
              <EmojiChoiceBox
                emoji="👨‍🍳"
                textColor="white"
                btnColor={clickBtn14}
                onClick={Click14}
                fontWeight="600"
                text="주차하기 편해요"
              />
            ) : (
              <EmojiChoiceBox
                emoji="👨‍🍳"
                textColor="black"
                btnColor={clickBtn14}
                onClick={Click14}
                text="주차하기 편해요"
              />
            )}
            {clickBtn15 === "#00CC99" ? (
              <EmojiChoiceBox
                emoji="☕"
                textColor="white"
                btnColor={clickBtn15}
                onClick={Click15}
                fontWeight="600"
                text="친절해요"
              />
            ) : (
              <EmojiChoiceBox
                emoji="☕"
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
        <input
          id="imgae"
          type="file"
          accept="img/*"
          onChange={onImgPostHandler}
          ref={fileInput}
        />

        <ImgBox src={newimage} alt="img" />
        <div>
          <div>리뷰를 남겨주세요</div>
        </div>

        <div>
          <Textarea
            placeholder="내용을 적어주세요"
            onChange={onReviewContentHandler}
            value={reviewContent}
          />
        </div>
        <button>등록하기</button>
      </form>
    </MainContainer>
  );
}

export default Write;

const ImgBox = styled.img`
  min-width: 300px;
  min-height: 300px;
  max-width: 500px;
  max-height: 500px;
  background-color: #ebebeb;
  align-items: center;
`;
