import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.spacing.large};
  /* Añadimos un ancho máximo y lo centramos para que no ocupe toda la pantalla en monitores grandes */
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  background-color: #333;
  border: 1px solid #555;
  color: ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-sizing: border-box;
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  /* Le damos un tamaño de fuente más legible */
  font-size: 1rem;
`;

export const Button = styled.button`
  padding: 12px 20px; /* Un poco más de padding vertical */
  background-color: ${({ theme }) => theme.colors.primary};
  color: #121212;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem; /* Mismo tamaño de fuente que el input */
  transition: background-color 0.2s, opacity 0.2s;
  
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background-color: ${({ theme, disabled }) => (disabled ? theme.colors.primary : theme.colors.primaryHover)};
  }
`;

export const AlbumList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const AlbumListItem = styled.li`
  background-color: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.medium};
  margin-bottom: ${({ theme }) => theme.spacing.small};
  border-radius: ${({ theme }) => theme.borderRadius};
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
`;