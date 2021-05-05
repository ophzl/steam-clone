import { useAuth } from "../../hooks/useAuth";
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
      <User className={className || "w-6 h-6"} />
    </object>
  );
};
