import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #141414;
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
    width: 70%;
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
    gap: 3.975rem;
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
  @media (max-width: 1432px) {
    .nav-container {
      display: none;
    }
  }
  @media (min-width: 1433px) {
    .menu {
      display: none;
    }
  }
`;
