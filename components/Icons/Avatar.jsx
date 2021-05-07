import { useAuth } from "../../hooks/useAuth";
import { MD5 } from "../../libs/md5";
import { User } from "./User";

export const Avatar = () => <></>;

Avatar.Me = ({ className }) => {
  const { user } = useAuth();
  return (
    <object
      data={user.photoUrl}
      alt="Me_avatar"
      className={className}
      type="image/png"
      referrerPolicy="no-referrer"
    >
      <img src={`https://www.gravatar.com/avatar/${MD5(user.email)}`}></img>
      {/* <User className={className || "w-6 h-6"} /> */}
    </object>
  );
};
