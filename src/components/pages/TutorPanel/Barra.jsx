import styled from "styled-components";

const Barra = styled.div`
  width: 100%;
  position: fixed;
  display: flex;
  height: 10vh;
`;

const ContainerOption = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  padding: 0;
`;

const Option = styled.li`
  list-style: none;
  color: black;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

export { Barra, ContainerOption, Option };
