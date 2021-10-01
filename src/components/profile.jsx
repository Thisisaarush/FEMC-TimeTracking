import React, { useRef } from "react";
import styled from "styled-components";
import ProfileImage from "../images/image-jeremy.png";

const Profile = ({ useTime }) => {
  const dailyRef = useRef();
  const weeklyRef = useRef();
  const monthlyRef = useRef();

  const HandleDaily = () => {
    useTime("daily");
    dailyRef.current.style.color = "white";
    weeklyRef.current.style.color = "hsl(235, 45%, 61%)";
    monthlyRef.current.style.color = "hsl(235, 45%, 61%)";
  };
  const HandleWeekly = () => {
    useTime("weekly");
    weeklyRef.current.style.color = "white";
    dailyRef.current.style.color = "hsl(235, 45%, 61%)";
    monthlyRef.current.style.color = "hsl(235, 45%, 61%)";
  };
  const HandleMonthly = () => {
    useTime("monthly");
    monthlyRef.current.style.color = "white";
    weeklyRef.current.style.color = "hsl(235, 45%, 61%)";
    dailyRef.current.style.color = "hsl(235, 45%, 61%)";
  };

  return (
    <ProfileCard>
      <ProfileUpper>
        <img src={ProfileImage} alt="profile" />
        <div>
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </div>
      </ProfileUpper>
      <ProfileLower>
        <p ref={dailyRef} onClick={HandleDaily}>
          Daily
        </p>
        <p ref={weeklyRef} className="weekly" onClick={HandleWeekly}>
          Weekly
        </p>
        <p ref={monthlyRef} onClick={HandleMonthly}>
          Monthly
        </p>
      </ProfileLower>
    </ProfileCard>
  );
};

// styled components
const ProfileCard = styled.div`
  grid-row: 1/3;
  background-color: ${(props) => props.theme.cardBg};
  border-radius: 1rem;

  @media (max-width: 600px) {
    grid-row: 1;
  }
`;
const ProfileUpper = styled.div`
  height: 65%;
  background-color: ${(props) => props.theme.profileBg};
  border-radius: 1rem;
  padding: 1.5rem;
  img {
    width: 60px;
    height: 60px;
    margin-bottom: 2rem;
    background-color: white;
    padding: 2px;
    border-radius: 50%;
  }
  p {
    color: ${(props) => props.theme.profileTextLight};
    margin-bottom: 0.5rem;
    font-size: 0.8rem;
  }
  h1 {
    color: white;
    font-weight: 300;
  }

  @media (max-width: 600px) {
    height: auto;
    display: flex;
    img {
      margin-right: 1rem;
    }
    p {
      font-size: 1rem;
    }
    h1 {
      font-size: 1.8rem;
    }
  }
`;
const ProfileLower = styled.div`
  padding: 1.5rem;
  color: ${(props) => props.theme.profileText};
  p {
    margin-bottom: 1rem;
    cursor: pointer;
    &:hover {
      color: white;
    }
    &.weekly {
      color: white;
    }
  }

  @media (max-width: 600px) {
    display: flex;
    justify-content: space-between;
    p {
      font-size: 1.3rem;
      margin-bottom: 0;
    }
  }
`;

export default Profile;
