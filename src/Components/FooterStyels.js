import styled from "styled-components";

export const Box = styled.div`
  padding: 80px 60px;
  padding-bottom: 30px;
  background: rgb(42, 40, 40);
  // position: absolute;
  bottom: 0;
  width: 100%;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  /* background: red; */
  border-bottom: 1px solid rgb(73, 72, 72);
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
  padding-bottom: 40px;
  // border-bottom: 3px solid rgb(220, 98, 98);
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 10px;
  font-size: 13px;
  text-decoration: none;

  &:hover {
    color: rgb(220, 98, 98);
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 17px;
  color: #fff;
  margin-bottom: 10px;
  font-weight: bold;
`;
