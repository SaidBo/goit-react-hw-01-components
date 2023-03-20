import styled from '@emotion/styled';

export const ProfileStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1 solid #ddd;
  padding: 20px;
  border-radius: 10;

  background-color: #e6e6fa;
  
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

export const Tag = styled.p`
  font-size: 16px;
  color: #999;
  margin: 0;
`;

export const Location = styled.p`
  font-size: 16px;
  margin: 0;
`;

export const StatsProfileList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const StatsProfileItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
`;

export const Quantity = styled.span`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;
