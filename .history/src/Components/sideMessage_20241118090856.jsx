import { useEffect, useState } from "react";

// import "/SideMessage.css"
import "./Styles/index.css";


const SideMessage = () => {
  const [visible, setVisible] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setVisible(false);
//     }, 5000);

//     return () => clearTimeout(timer);
//   }, []);

  if (!visible) return null;

  return (
    <div className="sideMessage">
      <img
        src="public/image.png"
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
