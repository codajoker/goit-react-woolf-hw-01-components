import css from './FriendListItem.module.css'
export const FriendListItem = ({avatar,name,isOnline,}) => {
    return (  <li  className={css.item}>
    <span className={isOnline ? css.status_active : css.status}></span>
    <img className="avatar" src={avatar} alt="User avatar" width="48" />
    <p className="name">{name}</p>
  </li>);
}
 
