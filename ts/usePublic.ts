import { useState, useEffect } from "react";

// 有用到react 的必須使用 use 開頭
function useMobileStatus() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 767.89);

  // handleResize 函数
  function handleResize() {
    setIsMobile(window.innerWidth < 767.89);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // 返回一个清理函数，在组件卸载时移除监听器
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
}

export { useMobileStatus };
