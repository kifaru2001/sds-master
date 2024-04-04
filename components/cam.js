import React, { useEffect, useRef } from "react";
import Webcam from "react-webcam";
import jsQR from "jsqr";

const videoConstraints = {
  width: 540,
  facingMode: "environment",
};

const Camera = () => {
  const webcamRef = useRef(null);
  const [url, setUrl] = React.useState(null);

  const capturePhoto = React.useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setUrl(imageSrc);
  }, [webcamRef]);

  const onUserMedia = (e) => {
    console.log(e);
  };

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          margin: 20,
          color: "white",
          fontFamily: "courier new",
        }}
      >
        Encrypted Data
      </h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            gap: 20,
            width: "auto",
            justifyContent: "center",
            justifySelf: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              width: "auto",
            }}
          >
            <Webcam
              style={{
                textAlign: "center",
                border: "3.5px solid rgba(100, 100, 100, 0.6)",
                borderRadius: "50%",
                height: "250px",
                width: "auto",
                justifyContent: "center",
                alignItems: "center",
              }}
              ref={webcamRef}
              audio={true}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
              onUserMedia={onUserMedia}
            />
          </div>

          <button onClick={capturePhoto} className="button" required>
            Capture
          </button>
          <button onClick={() => setUrl(null)} className="button">
            Retake
          </button>
          {url && (
            <div>
              <img
                src={url}
                alt="Screenshot"
                style={{
                  textAlign: "center",
                  border: "3.5px solid rgba(100, 100, 100, 0.6)",
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                }}
              />
            </div>
          )}
          <button className="button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Camera;
