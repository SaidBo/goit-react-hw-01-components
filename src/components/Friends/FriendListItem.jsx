import PropTypes from 'prop-types';

import { FriendStatusOnline, FriendStatusOffline, AvatarFriend, NameFriend } from '../Friends/Friends.styled';

export const Friend = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <>
      {/* <span className="status">{isOnline}</span> */}
      {isOnline ? <FriendStatusOnline /> : <FriendStatusOffline />}

      <AvatarFriend src={avatar} alt="User avatar" width="48" />
      <NameFriend className="name">{name}</NameFriend>
    </>
  );
};

Friend.propTypes = {
  friend: PropTypes.shape({
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
