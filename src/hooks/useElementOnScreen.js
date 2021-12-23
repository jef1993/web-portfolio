import { useState, useEffect, useMemo } from "react";

const useElementOnScreen = (targetRef) => {
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  const options = useMemo(() => {
    return {
      threshold: 0.4,
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    const currentTarget = targetRef.current;
    if (currentTarget) observer.observe(currentTarget);

    // return () => {
    //   if (currentTarget) observer.unobserve(currentTarget);
    // };
  }, [targetRef, options]);

  return isVisible;
};

export default useElementOnScreen;
