import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 5;
  width: 100%;
  border-bottom: 2px solid black;
  box-shadow: 2px 2px 4px black;
  min-height: 10vh;
  background-color: #161616;
  display: flex;
  flex-direction: column;
`;

export const NavigationContainer = styled.div`
  align-self: flex-end;
`;
