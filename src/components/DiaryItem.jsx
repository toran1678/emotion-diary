import "./DiaryItem.css"
import { getEmotionImage } from "../util/get-emotion-image"
import Button from "./Button";
import { useNavigate } from "react-router-dom"
import { Edit2, Calendar } from 'lucide-react';

const DiaryItem = ({id, emotionId, createdDate, content}) => {
  const nav = useNavigate();

  return (
    <div className="DiaryItem">
      <div 
        onClick={() => nav(`/diary/${id}`)}
        className={`img_section img_section_${emotionId}`}
      >
        <img src={getEmotionImage(emotionId)} />
      </div>
      <div
        onClick={() => nav(`/diary/${id}`)}
        className="info_section"
      >
        <div className="created_date">
          <Calendar size={18} style={{marginRight: 4, verticalAlign: 'middle', marginTop: -2}} />
          {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className="content">
          {content}
        </div>
      </div>
      <div className="button_section">
        <Button
          icon={<Edit2 size={16} />}
          onClick={() => nav(`/edit/${id}`)}
          text={"수정하기"}
        />
      </div>
    </div>
  )
}

export default DiaryItem;