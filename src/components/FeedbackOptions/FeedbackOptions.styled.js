import styled from 'styled-components';

export const FeedbackOptionsList = styled.ul`
  display: flex;
  align-items: center;
  gap: 70px;
  list-style: none;

  li {
    &:first-child button:hover {
      color: #ffffff;
      background: #4dff47;
      border: 1px solid #4dff47;
      text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff;
      box-shadow: 0 0 5px #4dff47, 0 0 20px #4dff47, 0 0 50px #4dff47,
        0 0 100px #4dff47;
    }

    &:nth-child(2) button:hover {
      color: #ffffff;
      background: #e2f409;
      border: 1px solid #e2f409;
      text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff;
      box-shadow: 0 0 5px #e2f409, 0 0 20px #e2f409, 0 0 50px #e2f409,
        0 0 100px #e2f409;
    }

    &:nth-child(3) button:hover {
      color: #ffffff;
      background: #ff4848;
      border: 1px solid #ff4848;
      text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff;
      box-shadow: 0 0 5px #ff4848, 0 0 20px #ff4848, 0 0 50px #ff4848,
        0 0 100px #ff4848;
    }
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  width: 98px;
  height: 40px;

  font-size: 17px;
  font-weight: 500;
  color: #ffffff80;

  border-radius: 7px;
  border: 1px solid #ffffff80;
  background-color: transparent;

  transition: 0.5s ease;
`;
