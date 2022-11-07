import styled from 'styled-components';

export const StyledContainer = styled.div`
  max-width: 510px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
  }
`;

export const DeleteButton = styled.button`
  font-family: 'Dancing Script', cursive;
  width: 60px;
  background-color: #f4bc56;
  color: #010101;
  border: 1px solid black;
  display: inline-block;
  margin-left: auto;

  outline: none;
  border-radius: 6px;

  cursor: pointer;

  :hover,
  :focus {
    border-color: #f0a00c;
    background-color: #f0a00c;
    color: #ffffff;
  }
`;

export const StyledNumber = styled.span`
  @media screen and (max-width: 767px) {
    flex-basis: 80%;
  }
`;
