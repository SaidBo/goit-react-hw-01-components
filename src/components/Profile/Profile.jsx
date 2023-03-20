
import PropTypes from 'prop-types';
import { FcRating, FcLikePlaceholder, FcManager } from 'react-icons/fc';
import {
  ProfileStyle,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  StatsProfileList,
  StatsProfileItem,
  Quantity,
} from '../Profile/Profile.styled';

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
    <ProfileStyle>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <StatsProfileList>
        <StatsProfileItem>
          <FcManager />
          <Quantity>{followers}</Quantity>
        </StatsProfileItem>
        <StatsProfileItem>
          <FcRating />
          <Quantity>{views}</Quantity>
        </StatsProfileItem>
        <StatsProfileItem>
          <FcLikePlaceholder />
          <Quantity>{likes}</Quantity>
        </StatsProfileItem>
      </StatsProfileList>
    </ProfileStyle>
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
