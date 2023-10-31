import React, { useRef } from 'react';
import CustomButton from '../../components/CustomButton';
import { Button, IconButton, Typography } from '@material-tailwind/react';

const gdmOptions = {
  video: true,
  audio: {
    echoCancellation: true,
    noiseSuppression: true,
    sampleRate: 44100,
    suppressLocalAudioPlayback: true,
  },
  screen: {
    cursor: 'always',
  },
};

function CaptureConfig() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const startCapture = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia(gdmOptions);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;

      }
    } catch (err) {
      console.error(err);
    }
  };

  const stopCapture = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      const stream = videoElement.srcObject as MediaStream;
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
      videoElement.srcObject = null;
    }
  };

  return (
    <div className='my-2 relative'>
      <video className='w-full bg-blue-gray-600 h-full border border-black rounded-lg ' ref={videoRef} autoPlay></video>
      {
        videoRef.current ?
          <></> :
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
           <Typography className='text-lg text-white font-bold tracking-widest'>Test Capturing..</Typography>
          </div>
      }

      <div className="mt-3 flex justify-between">

        <div>
          <CustomButton className='bg-black' onClick={startCapture}>Start Capture</CustomButton>
          <CustomButton className='bg-red-300' onClick={stopCapture}>Stop Capture</CustomButton>
        </div>
        <div>
          <Button color="amber">Video</Button>
          <Button color="amber">Mute</Button>
        </div>
      </div>
    </div>
  );
}

export default CaptureConfig;
