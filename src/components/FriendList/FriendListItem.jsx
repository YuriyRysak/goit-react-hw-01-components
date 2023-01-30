import PropTypes from 'prop-types';
import css from './FriendStyle.module.css';
import { BsFillCircleFill } from "react-icons/bs";

export const FriendListItem = ({ avatar, name, isOnline }) => (

  <li className={css.item}>
    <span> <BsFillCircleFill className={isOnline ? css.online : css.offline}/></span>
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
  </li>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};