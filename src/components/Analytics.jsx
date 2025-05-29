import { useEffect } from "react";
import { useLocation } from "react-router";

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Проверяем что Google Tag Manager загружен
    if (typeof window !== 'undefined' && window.dataLayer) {
      // Отправляем событие pageview при изменении маршрута
      window.dataLayer.push({
        event: "pageview",
        page_location: window.location.href,
        page_path: location.pathname,
        page_title: document.title,
      });
    } else {
      console.warn('Analytics: Google Tag Manager not found');
    }
  }, [location]);

  return null;
};

export default Analytics;
