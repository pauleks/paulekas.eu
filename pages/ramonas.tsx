import type { NextPage } from "next";

const Ramonas: NextPage = () => {
  return (
    <>
      <video src="/ramonas.mp4" controls loop></video>

      <style jsx>{`
        video {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </>
  );
};

export default Ramonas;
