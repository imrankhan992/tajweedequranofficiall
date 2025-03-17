

import React, { useEffect } from 'react';

const ChatIcon = () => {
  useEffect(() => {
    // Create a Tawk.to script tag
    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script");
      var s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/674d9d522480f5b4f5a6a8c6/1ie3it3bd'; // Replace with your Tawk.to ID
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);

  return null;
};

export default ChatIcon;
