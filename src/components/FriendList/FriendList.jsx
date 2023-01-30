import PropTypes from 'prop-types';
import css from './FriendStyle.module.css';
import { BsFillBrightnessLowFill } from "react-icons/bs";

export const FriendList = ({friends}) => {
  return(
  <div>
   <ul>{friends.map(({ avatar, name, isOline, id }) => (
    <li className={css.item} key={id}>
    <BsFillBrightnessLowFill className={css.online-friends}/>
        <span className={css.status}>{isOline}</span>
        <img className={css.avatar} src={avatar} alt={name} width="48" />
        <p className={css.name}>{name}</p>
      </li>
   ))}
      
    </ul>
</div>

  )};


FriendList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};