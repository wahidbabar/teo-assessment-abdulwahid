import { useStopwatch } from "react-timer-hook";

export function MyStopwatch() {
  const { seconds, minutes, hours, days, isRunning, start, pause, reset } =
    useStopwatch({ autoStart: true });

  return (
    <div style={{ textAlign: "center" }} className="pt-3">
      <div style={{ fontSize: "20px" }} className="text-gray-500">
        <span>0{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
    </div>
  );
}
