import styled from "styled-components";
import LogoImg from "../../assets/logo.svg";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  /* background-color: #141414; */
  align-items: center;
  padding: 12px 0;

  .hamburguer-line {
    width: 32px;
    height: 3px;
    position: relative;
    background: #ffffff;
    border-radius: 3px;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      width: 32px;
      height: 3px;
      border-radius: 3px;

      background: #ffffff;
      top: 10px;
    }

    &::before {
      content: "";
      position: absolute;
      left: 0;
      width: 32px;
      height: 3px;
      border-radius: 3px;

      background: #ffffff;
      top: -10px;
    }
  }

  .navigation {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 16px;
    max-width: 1300px;
  }

  .logo {
    height: 46px;
  }

  .title {
    color: #fff;
    font-size: 32px;
  }

  .nav-container {
    display: flex;
    gap: 32px;
    align-items: center;
  }

  .nav {
    color: #fff;
    font-size: 1rem;
    font-weight: 500;
  }

  .nav-container a:hover,
  .nav-container a.active {
    color: #66ffac;
    transition: 0.4s;
  }

  .menu {
    display: none;
  }
  @media (max-width: 800px) {
    .nav-container {
      display: none;
    }
    .menu {
      display: initial;
    }
  }
`;

export const Brand = styled(LogoImg)`
  width: 100px;
  height: 38px;
`;
