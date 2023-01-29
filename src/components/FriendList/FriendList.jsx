import PropTypes from 'prop-types';
import css from './FriendStyle.module.css';

export const FriendList = ({friends}) => {
  return(
  <div>
   <ul>{friends.map(({ avatar, name, isOline, id }) => (
    <li className={css.item} key={id}>
        <span className={css.status}>{isOline}</span>
        <img className={css.avatar} src={avatar} alt={name} width="48" />
        <p className={css.name}>{name}</p>
      </li>
   ))}
      
    </ul>
</div>

  )};





// export const FriendList = ({ friends }) => {
//   // console.log(friends);

//   return (
//     <div className={css.friends}>
//       <ul className={css.friends__list}>
//         {friends.map(({ avatar, name, isOnline, id }) => (
//           <li className={css.friends__item} key={id}>
//             <span className={`${css.friends__status} ${css[isOnline]}`}>
//               {isOnline}
//             </span>
//             <img className={css.avatar} src={avatar} alt={name} />
//             <p className={css.friends__name}>{name}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

FriendList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};