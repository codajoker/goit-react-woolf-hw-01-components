import { FriendListItem } from "./FriernListItem/FriendListItem";
import css from './FriendList.module.css'
export const FriendList = ({friends}) => {
    return ( <ul className={css.friend_list}>

        {friends.map((friend) => <FriendListItem key={friend.id} avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} />)}
  </ul> )
}
 
