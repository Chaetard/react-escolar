import styled from "styled-components";

const Barra = styled.div`
  width: 90%;
  position: fixed;
  background-color: red;
  display: flex;
  margin-left: 5%;
  margin-right: 5%;
  border-radius: 0 0 10px 10px;
  height: 10vh;
`;

const ContainerOption = styled.ul`
  display: flex;
  justify-content: space-around;
  gap: 16px;
  width: 100%;
  height: 100%;
`;

const Option = styled.li`
  list-style: none;
  color: black;
  font-size: 1.5rem;
  display: flex;
    justify-content: center;
    align-items: center;
  &:hover {
    background-color: red;
    cursor: pointer;
  }
`;

export { Barra, ContainerOption, Option };
