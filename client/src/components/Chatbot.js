import React, { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    // Tạo script element và chèn vào DOM
    const script = document.createElement("script");
    script.src =
      "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script nếu cần thiết
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* Chèn df-messenger */}
      <df-messenger
        intent="WELCOME"
        chat-title="travel"
        agent-id="fdd22755-1d4e-492f-9db4-26aa6e91a917"
        language-code="en"
      ></df-messenger>
    </div>
  );
};

export default Chatbot;
