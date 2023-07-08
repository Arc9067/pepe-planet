import React, { useState, useEffect } from "react";
import { ProgressBar } from "react-loader-spinner";

const Loading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  }, []);

  return loading ? (
    <section className="min-h-screen w-full bg-green-600 flex justify-center items-center fixed top-0 left-0 z-[9999]">
      <ProgressBar
        height="100"
        width="100"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="#fff"
        barColor="#fff"
      />
    </section>
  ) : null;
};

export default Loading;
