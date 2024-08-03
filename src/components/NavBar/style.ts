import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #141414;
  height: 8.5rem;
  align-items: center;

  .navigation {
    display: flex;
    justify-content: space-between;
    width: 70%;
  }

  .logo {
    width: 60px;
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
  @media (max-width: 1433px) {
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
