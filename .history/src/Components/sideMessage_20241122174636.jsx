import { useEffect, useState } from "react";

const SideMessage = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2; // Current scroll position (middle of the viewport)
      const pageHeight = document.documentElement.scrollHeight; // Total page height
      const middleOfPagZZe = pageHeight / 2; // Middle of the page

      if (scrollPosition >= middleOfPage - 50 && scrollPosition <= middleOfPage + 50) {
        setVisible(true); // Show when near the middle
      } else {
        setVisible(false); // Hide otherwise
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="sideMessage">
      <img
        src="public/image.png"
        alt="Welcome image"
        className="sideMessageImage"
      />
    </div>
  );
};

export default SideMessage;
