import styled from "styled-components";

export const TimelineArea = styled.div`
  position: relative;
  margin: 90px auto;
  width: 100%;
  max-width: 400px;
  border-left: 2px solid ${({ theme }) => theme["gray-300"]};
  padding: 0 20px 0 30px;
  z-index: 10;

  @media screen AND (max-width: 680px) {
    max-width: 360px;
  }

  &::before {
    content: attr(data-timeline);
    position: absolute;
    top: -80px;
    left: 20px;
    font-size: 1.75rem;
  }
`;
export const TimelineCard = styled.div`
  background-color: ${({ theme }) => theme["gray-700"]};
  padding: 10px 25px;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme["blue-100"]};
  line-height: 1.7;
  position: relative;
  height: 110px;
  margin-bottom: 20px;

  &::before {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme["purple-700"]};
    border: 3px solid ${({ theme }) => theme["gray-300"]};
    position: absolute;
    top: 10px;
    left: -40px;
  }

  &::after {
    content: "";
    width: 0;
    height: 0;
    border-style: solid;
    border-color: transparent ${({ theme }) => theme["blue-100"]} transparent
      transparent;
    border-width: 8px;
    position: absolute;
    left: -17px;
    top: 10px;
  }
`;
export const Title = styled.h2`
  font-size: 1.125rem;
  text-transform: uppercase;
  line-clamp: 1;
  -webkit-line-clamp: 1;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
export const Company = styled.h3`
  font-size: 1rem;
  line-clamp: 1;
  -webkit-line-clamp: 1;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
export const Period = styled.h4`
  font-size: 0.875rem;
  text-transform: uppercase;
`;
