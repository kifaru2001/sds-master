import Webcam from 'react-webcam';
import { CameraOptions, useFaceDetection } from 'react-use-face-detection';
import FaceDetection from '@mediapipe/face_detection';
import { Camera } from '@mediapipe/camera_utils';
import ImageDemo from './Demo';
import toast, { Toaster } from "react-hot-toast";
import toastStyle from "../util/toastConfig";


const width = 500;
const height = 500;

const WebcamDemo = (): JSX.Element => {

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
  toast(`Face detected, Please close the Window`, {
    icon: "⚡",
    style: toastStyle,
    position: "bottom-center",
  });
}
  return (
    <div className='cont'>
            <Toaster position="bottom-center" reverseOrder={false} />

<div className='info'>
{isLoading ? (
  <>
  <div className='spinn' style={{margin: "2%"}} />
  </>
) : (
  <>
  <p>...</p>
  </>
)}
<p>{`Face Detected: ${detected}`}</p>
</div>
    
      <div style={{ width, height, position: 'relative' }} className='bd'>
        {boundingBox.map((box, index) => (
          <div
            key={`${index + 1}`}
            style={{
              border: '10px double green',
              position: 'absolute',
              top: `${box.yCenter * 100}%`,
              left: `${box.xCenter * 100}%`,
              width: `${box.width * 100}%`,
              height: `${box.height * 100}%`,
              zIndex: 1,
            }}
          />
        ))}
        <Webcam
          ref={webcamRef}
          forceScreenshotSourceSize
          
          style={{
            height: 'auto',
            border: 'double 10px lightgray',
            width: 300,
            borderRadius: '50%',

          }}
        />
              <div className='info'>Place Your Face at the center of the Circle to Detect face</div>
              <ImageDemo />
      </div>

    </div>
  );
};

export default WebcamDemo;