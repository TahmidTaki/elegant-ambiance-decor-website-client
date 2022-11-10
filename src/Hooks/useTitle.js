import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title}-Elegant`;
  }, [title]);
};
export default useTitle;
