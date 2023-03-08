import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 50px;
`;
const WriteHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 125px;
  width: 100%;
  border-bottom: 1px solid #e5e5e5;
`;

const WriteHeaderTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  min-width: 50px;
`;

const EmojiContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 30px 0px;
  background-color: aliceblue;
`;

const EmojiTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  min-width: 50px;
`;

const EmojiSubTitle = styled.div`
  font-size: 1rem;
  font-weight: 800;
  min-width: 50px;
`;

const EmojiChoiceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 20px;
`;

const EmojiPrice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 25%;
  cursor: pointer;
`;

function EmojiChoiceBox({
  emoji,
  onClick,
  text,
  btnColor,
  textColor,
  fontWeight,
}) {
  return (
    <EmojiBtn
      type="button"
      onClick={onClick}
      style={{
        backgroundColor: btnColor,
        color: textColor,
        fontWeight: fontWeight,
      }}
    >
      <div>
        {emoji} {text}
      </div>
    </EmojiBtn>
  );
}

const EmojiBtn = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 45px;
  width: 300px;
  cursor: pointer;
  font-size: 20px;
  border: none;
  border-radius: 10px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
  padding-left: 10px;
`;

const Textarea = styled.textarea`
  width: 800px;
  height: 500px;
  background: #f8f8f8;
  border-radius: 5px;
  padding: 20px;
  box-sizing: border-box;
  border: 0;
  outline: 0;
  border: 1px solid #f8f8f8;
`;

export {
  MainContainer,
  WriteHeader,
  WriteHeaderTitle,
  EmojiContainer,
  EmojiTitle,
  EmojiSubTitle,
  EmojiChoiceContainer,
  EmojiPrice,
  EmojiChoiceBox,
  Textarea,
};
