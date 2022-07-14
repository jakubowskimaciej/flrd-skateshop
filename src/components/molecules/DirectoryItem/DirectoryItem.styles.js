import styled from 'styled-components';

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${({ image }) => (image ? image : null)});
  background-position: 0 30%;
  background-size: cover;
`;

export const DirectoryWrapper = styled.div`
  min-width: 35rem;
  height: 25rem;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  margin: 0 0.75rem 1.5rem;
  position: relative;
  box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.16),
    0 0.3rem 0.6rem rgba(0, 0, 0, 0.23);
  overflow: hidden;
  cursor: pointer;

  ${({ theme }) => theme.mediaQueries.desktop} {
    height: 35rem;
    min-width: 46rem;
  }

  &:hover {
    & ${ImageWrapper} {
      transform: scale(1.02);
      transition: transform 350ms ease-in-out;
    }
  }
  &:first-child {
    margin-right: 0.75rem;
  }
  &:last-child {
    margin-left: 0.75rem;
  }
`;

export const TextWrapper = styled.div`
  height: 9rem;
  padding: 0 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 0.2rem solid var(--color-white);
  color: var(--color-white);
  position: absolute;
  h2 {
    font-weight: 900;
    margin-bottom: 6px;
    font-size: 22px;
    text-transform: uppercase;
    z-index: 1;
  }
  span {
    font-weight: 400;
    font-size: 1.6rem;
    z-index: 1;
  }
  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.55);
  }
`;
