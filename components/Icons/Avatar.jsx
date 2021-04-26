import { useAuth } from "../../hooks/useAuth";
import { MD5 } from "../../libs/md5";

export const Avatar = () => <></>;

Avatar.Me = ({ className }) => {
  const { user } = useAuth();
  return (
    <img
      src={`https://www.gravatar.com/avatar/${MD5(user.email)}`}
      alt="Me_avatar"
      className={className}
    ></img>
  );
};
