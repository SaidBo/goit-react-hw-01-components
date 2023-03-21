import styled from '@emotion/styled';

export const FriendsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const FriendsItem = styled.li`
  display: flex;
  align-items: center;
  margin-right: 20px;
  margin-bottom: 20px;
  border: 1px solid #c2c2c2;
  border-radius: 5px;
`;

export const AvatarFriend = styled.img`
  border-radius: 50%;
  margin-right: 10px;
`;

export const NameFriend = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

export const FriendStatusOnline = styled.div`
  width: 30px;
  height: 30px;
  background-color: greenyellow;
  border-radius: 50%;
`;

export const FriendStatusOffline = styled.div`
  width: 30px;
  height: 30px;
  background-color: red;
  border-radius: 50%;
`;
