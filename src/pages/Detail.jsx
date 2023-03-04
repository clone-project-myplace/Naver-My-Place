import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { deleteReview, getDetail } from "../api/getDetail";

function Detail() {
    const { id } = useParams();


    const queryClient = useQueryClient();

    const { mutate: deleteReviewMutate } = useMutation(
        () =>
            deleteReview(
                detailData.reviewId,
                localStorage.getItem("accessToken")
            ),
        {
            onSuccess: () => {
                queryClient.invalidateQueries("getReview");
                console.log("Item deleted");
            },
        }
    );

    const { isLoading, isError, data } = useQuery(["getReview"], () =>
        getDetail(id)
    );

    const navigate = useNavigate();

    const detailData = data?.data;

    console.log(detailData);

    if (isLoading) {
        // 로딩스피너로 바꿔야함
        return <h1>로딩중입니다!</h1>;
    }

    if (isError) {
        // 큼..!
        return <h1>에러가 발생했습니다.</h1>;
    }

    const handleDelete = () => {
        deleteReviewMutate();
    };

    return (
        <>
            {/* <div>{JSON.stringify(data.data.memberName)}</div>
            <div>{detailData.memberName}</div> */}
            <button
                onClick={() => {
                    navigate("/write/edit");
                }}
            >
                수정하기
            </button>
            <button
                onClick={() => {
                    handleDelete;
                }}
            >
                삭제하기
            </button>

            <div>{detailData.memberName}</div>
            <div>{detailData.restaurantName}</div>
            <div>{detailData.restaurantAddress}</div>
            <div>{detailData.reviewContents}</div>
            <div>{detailData.imgUrl}</div>
            <div>{detailData.likeCount}</div>
            <div>{detailData.keywordList}</div>
            <div>{detailData.createdDate}</div>

            <div></div>
        </>
    );
}

export default Detail;
