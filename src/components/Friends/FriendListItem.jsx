import PropTypes from 'prop-types';

export const Friend = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <>
      {/* <span className="status">{isOnline}</span> */}
      {isOnline ? <FriendStatusOnline /> : <FriendStatusOffline />}

      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
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
