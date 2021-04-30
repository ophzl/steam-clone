import { useAuth } from "../../hooks/useAuth";
import { MD5 } from "../../libs/md5";
import { User } from "./User";

export const Avatar = () => <></>;

Avatar.Me = ({ className }) => {
  const { user } = useAuth();
  return (
    <object
      data={
        user.photoUrl || `https://www.gravatar.com/avatar/${MD5(user.email)}`
      }
      alt="Me_avatar"
      className={className}
      type="image/png"
    >
      <User className={className || "w-6 h-6"} />
    </object>
  );
};
