import { useFaceDetection } from 'react-use-face-detection';
import FaceDetection from '@mediapipe/face_detection';

const ImageDemo = (): JSX.Element => {
  const { imgRef, boundingBox, isLoading, detected, facesDetected } = useFaceDetection({
    faceDetectionOptions: {
      model: 'short',
    },
    faceDetection: new FaceDetection.FaceDetection({
      locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_detection/${file}`,
    }),
  });

  return (
    <div>
      <div style={{ width: '150px', height: '150px', position: 'relative' }}>
        {boundingBox.map((box, index) => (
          <div
            key={`${index + 1}`}
            style={{
              border: '4px solid green',
              position: 'absolute',
              borderRadius: '50%',
              top: `${box.yCenter * 100}%`,
              left: `${box.xCenter * 100}%`,
              width: `${box.width * 100}%`,
              height: `${box.height * 100}%`,
              zIndex: 1,
            }}
          />
        ))}
        <img
          className='img'
          crossOrigin="anonymous"
          ref={imgRef}
          alt=""
          style={{
            position: 'absolute',
            marginLeft: 'auto',
            marginRight: 'auto',
            left: '0',
            right: '0',
            textAlign: 'center',
            zIndex: 0,
            width: '100%',
            height: '100%',
            objectFit: 'fill',
          }}
          src="/man.png"
        />
      </div>
    </div>
  );
};

export default ImageDemo;
