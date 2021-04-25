import { useEffect } from "react";
import { useAuth } from "./useAuth";
import { useRouter } from "next/router";

function PrivateRoute({ children }) {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) router.push("/");
  }, []);
  return <>{user && <>{children}</>}</>;
}

export default PrivateRoute;
