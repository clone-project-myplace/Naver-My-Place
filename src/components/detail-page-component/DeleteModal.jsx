import React, { useState } from "react";
import styled from "styled-components";

const DeleteModal = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  handleDelete,
}) => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirmClick = () => {
    setIsConfirmed(true);
    onConfirm();
    handleDelete();
  };

  return (
    <StyledModalOverlay open={isOpen} onClick={onClose}>
      <StyledModalContent onClick={(e) => e.stopPropagation()}>
        <StText>
          <h2>{title}</h2>
          <p>{message}</p>
        </StText>
        <StButtonBox>
          <StButton boderRight="1px solid" onClick={onClose}>
            취소
          </StButton>
          <StButton color="#00b49b" onClick={handleConfirmClick}>
            삭제
          </StButton>
        </StButtonBox>
      </StyledModalContent>
    </StyledModalOverlay>
  );
};

export default DeleteModal;

const StyledModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: ${(props) => (props.open ? "block" : "none")};
`;

const StyledModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 1000;
`;

const StText = styled.div`
  padding: 36px 18px 21px;
`;

const StButtonBox = styled.div`
  display: flex;
  border-top: 1px solid;
  border-top-color: #ecf0f2;
  text-align: center;
`;

const StButton = styled.div`
  margin-top: 10px;
  cursor: pointer;
  flex: 1;
  line-height: 2rem;
  color: ${(props) => props.color};
  border-right: ${(props) => props.boderRight};
  border-right-color: #ecf0f2;

  text-align: center;
  align-items: center;
  justify-content: center;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
`;
