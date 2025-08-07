import styled from 'styled-components';

export const DetailContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing.large};
`;

export const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

export const TrackList = styled.ol`
  list-style-type: none;
  padding: 0;
`;

export const TrackListItem = styled.li`
  background-color: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.medium};
  margin-bottom: ${({ theme }) => theme.spacing.small};
  border-radius: ${({ theme }) => theme.borderRadius};
  border-left: 4px solid ${({ theme }) => theme.colors.secondary};
`;