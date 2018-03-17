import { css } from 'styled-components';

export const centerdContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const largeHeader = css`
  color: #4a90e2;
  font-weight: 100;
  font-size: 100px;
  margin-bottom: 20px;
`;

export const subHeader = css`
  color: #4a90e2;
  font-size: 35px;
  text-align: center;
  line-height: 55px;
  font-weight: 100;
`;

export const errorMsg = css`
  color: #ff7777;
  font-size: 22px;
  text-align: center;
`;
export const center = css`
  text-align: center;
`;

export const baseTextAreaContainer = css`
  display: flex;
  height: 110px;
  margin: 10px;
`;

export const baseTextArea = css`
  flex: 1;
  border-radius: 3px;
  padding: 8px 10px;
  font-size: 18px;
  resize: none;
`;

export const darkBtn = css`
  background: #4a90e2;
  color: #fff;
  text-align: center;
  border-radius: 5px;
  padding: 10px 15px;
  border-style: none;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid #4a90e2;
  &:hover {
    background: #1877e6;
  }
`;

export const baseDuckContainer = css`
  border-radius: 5px;
  max-width: 450px;
  margin: 15px auto;
  padding: 10px;
  cursor: pointer;
`;

export const baseAvatar = css`
  width: 75px;
  border-radius: 3px;
  margin-right: 15px;
`;

export const clickable = css`
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;
