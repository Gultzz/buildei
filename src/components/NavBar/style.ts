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
  background-color: rgb(20 20 20 / var(--tw-bg-opacity));

  @media (max-width: 1280px) {
    .pages {
      display: none;
    }
  }

  @media (min-width: 1280px) {
    .menu {
      display: none;
    }
  }
`;
