import styled, {css} from "styled-components";

interface ContainerProps {
  isMenuOpen: boolean;
}

export const Container = styled.div<ContainerProps>`
  ${({isMenuOpen}) => {
    return isMenuOpen
      ? css`
          height: 16rem;
        `
      : css`
          height: 6rem;
        `;
  }}
  transition: height 0.3s;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #141414;

  nav {
    background-color: #141414;
    width: 58.333333%;
    align-items: center;
    justify-content: space-between;
    display: flex;
    section {
      ul {
        li {
          color: white;
        }
      }
    }
  }

  ul {
    li {
      a {
        color: white;
      }
    }
  }

  @media (max-width: 1280px) {
    ul {
      li {
        a {
          display: none;
        }
      }
    }
  }

  @media (min-width: 1280px) {
    .menu {
      display: none;
    }
  }
`;
