import { useEffect, useState } from "react";



const SideMessage = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
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
