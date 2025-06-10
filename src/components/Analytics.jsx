import { useEffect } from "react";
import { useLocation } from "react-router";

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.dataLayer) {
      window.dataLayer.push({
        event: "pageview",
        page_path: location.pathname,
      });
    }
  }, [location]);

  return null;
};

export default Analytics;
