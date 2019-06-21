import * as cv from 'opencv4nodejs';

(async () => {
  const cap = new cv.VideoCapture(0);

  const showFrame = async () => {
    const frame = await cap.readAsync();
    cv.imshow('Test frame', frame);
    cv.waitKey();
    showFrame();
  };

  showFrame();

})();
