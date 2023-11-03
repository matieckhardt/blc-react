import React, { useEffect } from "react";
import classes from "../css/Process.module.css";

const SineWaveCanvas = () => {
  useEffect(() => {
    const canvas = document.getElementById("sineWaveCanvas");
    const ctx = canvas.getContext("2d");

    const width = canvas.width;
    const height = canvas.height;
    const numSegments = 6; // Number of segments for the sine wave
    const segmentWidth = width / numSegments;
    const amplitude = 150; // Amplitude of the sine wave
    const frequency = 0.02; // Frequency of the sine wave

    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < numSegments; i++) {
      let gradient;

      switch (i) {
        case 0:
          gradient = ctx.createLinearGradient(
            i * segmentWidth,
            height / 2 - amplitude,
            (i + 1) * segmentWidth,
            height / 2 + amplitude
          );
          gradient.addColorStop(0, "#355B7C");
          gradient.addColorStop(1, "#243F55");
          break;
        case 1:
          gradient = ctx.createLinearGradient(
            i * segmentWidth,
            height / 2 - amplitude,
            (i + 1) * segmentWidth,
            height / 2 + amplitude
          );
          gradient.addColorStop(0, "#821159");
          gradient.addColorStop(1, "#CF1E8D");
          break;
        case 2:
          gradient = ctx.createLinearGradient(
            i * segmentWidth,
            height / 2 - amplitude,
            (i + 1) * segmentWidth,
            height / 2 + amplitude
          );
          gradient.addColorStop(0, "#8151A6");
          gradient.addColorStop(1, "#492767");
          break;
        case 3:
          gradient = ctx.createLinearGradient(
            i * segmentWidth,
            height / 2 - amplitude,
            (i + 1) * segmentWidth,
            height / 2 + amplitude
          );
          gradient.addColorStop(0, "#5D7F63");
          gradient.addColorStop(1, "#6D9776");
          break;
        case 4:
          gradient = ctx.createLinearGradient(
            i * segmentWidth,
            height / 2 - amplitude,
            (i + 1) * segmentWidth,
            height / 2 + amplitude
          );
          gradient.addColorStop(0, "#84125A");
          gradient.addColorStop(1, "#C61D87");
          break;
        case 5:
          gradient = ctx.createLinearGradient(
            i * segmentWidth,
            height / 2 - amplitude,
            (i + 1) * segmentWidth,
            height / 2 + amplitude
          );
          gradient.addColorStop(0, "#3B5A72");
          gradient.addColorStop(1, "#798EA0");
          break;
        default:
          break;
      }

      ctx.beginPath();
      for (let x = i * segmentWidth; x <= (i + 1) * segmentWidth; x++) {
        const y =
          amplitude * Math.sin(frequency * x) +
          height / 2 +
          (i % 2 === 0 ? 10 : -10);
        ctx.lineTo(x, y);
      }
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 20;
      ctx.lineCap = "round"; // Make the peaks rounded
      ctx.stroke();
    }
  }, []);

  return (
    <div className={classes.sineWave}>
      <canvas id="sineWaveCanvas" width={790} height={400}></canvas>
    </div>
  );
};

export default SineWaveCanvas;
