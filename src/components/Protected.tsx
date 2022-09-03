import { Navigate } from "react-router-dom";

type Props = {
  isLoggedIn: boolean;
  children: any;
};
export const Protected = ({ isLoggedIn, children }: Props) => {
  console.log("children", children);

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
