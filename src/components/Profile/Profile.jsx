import PropTypes from 'prop-types';
import { FcRating, FcLikePlaceholder, FcManager } from 'react-icons/fc';

export const Profile = ({
  user: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          {/* <span class="label">Followers</span> */}
          <FcManager />
          <span className="quantity">{followers}</span>
        </li>
        <li>
          {/* <span class="label">Views</span> */}
          <FcRating />
          <span className="quantity">{views}</span>
        </li>
        <li>
          {/* <span className="label">Likes</span> */}
          <FcLikePlaceholder />
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
