import { useEffect, useState } from "react";

const SideMessage = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Show the component initially for 5 seconds
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000);

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  if (!visible) return null;

  return (
    <div className="sideMessage">
      <img
        src="asset/image/your-image.jpg"
        alt="Welcome image"
        className="sideMessageImage"
      />
      <p className="sideMessageText">
        You are welcome to Anyawe Bright's portfolio page. Have a wonderful
        experience.
      </p>
    </div>
  );
};

export default SideMessage;
