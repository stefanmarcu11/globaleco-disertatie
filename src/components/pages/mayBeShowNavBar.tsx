import { useEffect, useState, ReactNode } from "react";
import { useLocation } from "react-router-dom";

type MaybeShowNavBarProps = {
  children: ReactNode;
};

const MaybeShowNavBar: React.FC<MaybeShowNavBarProps> = ({ children }) => {
  const location = useLocation();
  const [showNavBar, setShowNavBar] = useState(false);

  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/registration") {
      setShowNavBar(false);
    } else {
      setShowNavBar(true);
    }
  }, [location]);

  return <div>{showNavBar && children}</div>;
};

export default MaybeShowNavBar;
