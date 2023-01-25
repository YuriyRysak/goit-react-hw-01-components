import PropTypes from 'prop-types';
import css from './FriendStyle.module.css';

export const FriendList = ({avatar, name, isOline}) => (
<li className={css.item}>
  <span className={css.status}>{isOline}</span>
  <img classNames={css.avatar} src={avatar} alt="User avatar" width="48" />
  <p className={css.friendName}>{name}</p>
</li>

)

FriendList.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  };