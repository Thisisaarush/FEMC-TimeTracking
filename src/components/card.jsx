import React from "react";
import styled from "styled-components";
import MoreIcon from "../images/icon-ellipsis.svg";
import UserData from "../data.json";

const Card = ({ time }) => {
  return (
    <>
      {UserData.map((data) => (
        <CardStyled>
          <IconContainer
            style={{ backgroundColor: `${data.color}` }}
          ></IconContainer>
          <ActivityContainer>
            <Activity>
              <h3>{data.title}</h3>
              <img src={MoreIcon} alt="more" />
            </Activity>

            {time === "daily" ? (
              <>
                <h1>{data.timeframes.daily.current}hrs</h1>
                <p>Last Day - {data.timeframes.daily.previous}hrs</p>
              </>
            ) : time === "monthly" ? (
              <>
                <h1>{data.timeframes.monthly.current}hrs</h1>
                <p>Last Month - {data.timeframes.monthly.previous}hrs</p>
              </>
            ) : (
              <>
                <h1>{data.timeframes.weekly.current}hrs</h1>
                <p>Last Week - {data.timeframes.weekly.previous}hrs</p>
              </>
            )}
          </ActivityContainer>
        </CardStyled>
      ))}
    </>
  );
};

// styled components
const CardStyled = styled.div`
  color: white;
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
  h1 {
    font-weight: 300;
    font-size: 3rem;
    margin-bottom: 0.5rem;
  }
  p {
    color: ${(props) => props.theme.profileTextLight};
    font-size: 0.8rem;
  }
`;
const IconContainer = styled.div`
  width: 100%;
  height: 90%;
`;
const ActivityContainer = styled.div`
  width: 100%;
  height: 80%;
  background-color: ${(props) => props.theme.cardBg};
  padding: 1.5rem;
  border-radius: 1rem;
  position: absolute;
  bottom: 0;
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.profileText};
  }
`;
const Activity = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  h3 {
    font-weight: 400;
  }
  img {
    width: 15px;
    height: 100%;
    cursor: pointer;
  }
`;

export default Card;
