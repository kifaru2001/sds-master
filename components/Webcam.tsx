import Webcam from 'react-webcam';
import { CameraOptions, useFaceDetection } from 'react-use-face-detection';
import FaceDetection from '@mediapipe/face_detection';
import { Camera } from '@mediapipe/camera_utils';
import ImageDemo from './Demo';
import toast, { Toaster } from "react-hot-toast";
import toastStyle from "../util/toastConfig";
import { useRouter } from "next/router";

const width = 300;
const height = 300;

const WebcamDemo = (): JSX.Element => {
  const router = useRouter();
  const { webcamRef, boundingBox, isLoading, detected, facesDetected } = useFaceDetection({
    faceDetectionOptions: {
      model: 'short',
      minDetectionConfidence: 1
    },
    faceDetection: new FaceDetection.FaceDetection({
      locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_detection/${file}`,
    }),
    camera: ({ mediaSrc, onFrame }: CameraOptions) =>
      new Camera(mediaSrc, {
        onFrame,
        width,
        height,
      })
  });
if(detected){
  toast(`Face detected, Proceeding to step 2`, {
    icon: "⚡",
    style: toastStyle,
    position: "bottom-center",
  });
  router.push("/step-two");
} 

  return (
    <div className='cont'>
            <Toaster position="bottom-center" reverseOrder={false} />

<div className='info'>
{isLoading ? (
  <div  style={{margin: "1%", display: "flex", alignContent: "center", justifyContent: "center",  width: "100%", height: "auto"}}>
  <div className='spinn' />
  </div>
) : (
  <>
  {detected ? (
<>
<div style={{display: "flex", alignContent: "center", justifyContent: "center", width: "100%"}}>
  <p style={{textAlign: "center", color: "green"}}>Face Detected</p>
  </div>
</>
  ) : (
<>
<div style={{display: "flex", alignContent: "center", justifyContent: "center", width: "100%"}}>
  <p style={{textAlign: "center", color: "red"}}>Face Not Detected</p>
  </div>
</>
  )}
  </>
)}
  <div style={{display: "flex", alignContent: "center", justifyContent: "center", width: "100%", textAlign: "center", gap: 10, flexDirection: "column"}}>
  <p style={{textAlign: "center"}}>{`Face Detected: ${detected}`}</p>
  </div>
</div>
    
      <div style={{ width, height, position: 'relative' }} className='bd'>
        {boundingBox.map((box, index) => (
          <div
            key={`${index}`}
            style={{
              border: '10px double green',
              position: 'absolute',
              top: `${box.yCenter * 100}%`,
              left: `${box.xCenter * 100}%`,
              width: `${box.width * 100}%`,
              height: `${box.height * 100}%`,
              zIndex: 1,
              borderRadius: '50%',
            }}
          />
        ))}
        <Webcam
          ref={webcamRef}
          forceScreenshotSourceSize
          
          style={{
            height: 300,
            border: 'double 10px white',
            width: "100%",
            borderRadius: '50%',
            animationName: "pulse",
            animationDuration: "0s",
            animationDirection: "pulse",
            animationIterationCount: "100",
            animationTimingFunction: "ease",
          }}
        />
      </div>
      <ImageDemo />
      <p style={{textAlign: "center", color: "white"}}>Place Your Face at the center of the circle until face is detected</p>
    </div>
  );
};

export default WebcamDemo;