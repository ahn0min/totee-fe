import { useGetRecommendList } from '@hooks/useGetQuery';
import { UserState } from '@store/user';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import RecommendSlider from './RecommendMentoSlider';
import {ReactComponent as ChevronIcon} from '@assets/chevron-down.svg';

interface Props{
  type: "recommend" | "best"
}
export const RecommendMento = ({type="recommend"}:Props) => {
  const [user, setUser] = useRecoilState(UserState);
  const { data } = useGetRecommendList();

  const [recommendData, setRecommendData] = useState();

  useEffect(() => {
    if (user.email !== '') {
      setRecommendData(data?.data?.body?.data.content);
    }
  }, [data]);

  const recommendInfo = {
    desc: "Level Up project",
    title:"커리어 성장을 위한 프로젝트" 
  }

  const bestInfo ={
    desc : "The best Mentor in Totee",
    title: "이달의 베스트 멘토"
  }

  const Info ={
    "recommend": recommendInfo,
    "best" :bestInfo,
  }

  return(
    <div className="recommend_container">
      <div className="title_wrapper">
        <div>
        <span className="title_sub">{Info[type]["desc"]}</span>
        <h2 className="title_main">{Info[type]["title"]}</h2>
        </div>
        <div className="total_button_wrapper">
          <div className="button-desc">전체 보기</div>
          <ChevronIcon/>
        </div>
      </div>
      <div className="recommend_content">
        <RecommendSlider recommendData={recommendData} type={type}/>
      </div>
    </div>
  );
};
