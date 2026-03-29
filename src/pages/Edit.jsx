import { useParams, useNavigate } from "react-router-dom"
import Header from "../components/Header"
import Button from "../components/Button"
import Editor from "../components/Editor"
import { useContext, useEffect, useState } from "react"
import { DiaryDispatchContext, DiaryStateContext } from "../App"
import useDiary from "../hooks/userDiary"
import usePageTitle from "../hooks/usePageTitle"
import { ChevronLeft, Trash2 } from 'lucide-react';

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
  const curDiaryItem = useDiary(params.id);
  usePageTitle(`${params.id}번 일기 수정`);

  const onClickDelete = () => {
    if(window.confirm("정말 삭제하시겠습니까? 다시 복구되지 않습니다.")) {
      // 삭제 로직
      onDelete(params.id);
      nav("/", { replace: true });
    } 
  }

  const onSubmit = (input) => {
    if(window.confirm("일기를 정말 수정하시겠습니까?")) {
      onUpdate(
        params.id,
        input.createdDate.getTime(),
        input.emotionId,
        input.content
      );
      nav("/", { replace: true });
    }
  }

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={
          <Button
            icon={<ChevronLeft size={18} />}
            text={"뒤로 가기"}
            onClick={() => nav(-1)} />
        }
        rightChild={
          <Button
            onClick={onClickDelete}
            icon={<Trash2 size={18} />}
            text={"삭제하기"}
            type={"NEGATIVE"} />
        }
      />
      <Editor initData={curDiaryItem} onSubmit={onSubmit} />
    </div>
  );
}

export default Edit;