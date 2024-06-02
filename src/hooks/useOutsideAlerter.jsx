import { useEffect } from "react";

export default function useOutsideAlerter({ menuRef, setmenuopened }) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        if (window.innerWidth <= 640) {
          setmenuopened(false);
        }
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef, setmenuopened]);

  // The hook doesn't return anything in this case
}
