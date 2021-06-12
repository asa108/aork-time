import React, { useState } from "react";

import "./homepage.style.scss";

import TimePickers from "../../components/timer-count/timer-count";

const HomePage = () => {
  const [startTime, setStartTime] = useState("07:30");

  //選択された値にstartTimeを置き換える
  const handleStartWorkTime = (event) => {
    setStartTime(event.target.value);
  };

  const [timeBreak, setTimeBreak] = useState("02:00");

  console.log("timeBreak", timeBreak);
  const handleTimeBreak = (event) => {
    setTimeBreak(event.target.value);
  };

  const [workTime, setWorkTime] = useState("07:30");

  console.log("workTime", workTime);
  const handleWorkTime = (event) => {
    setWorkTime(event.target.value);
  };

  // ★追加
  // hourとminutesに分けてhourをminutesに変換(出勤時間)
  // なんでsubstring(3,5)になっているかというと
  // 表記は 07:45 みたいに:も文字数としてカウントしている
  const startTimeHour = Number(startTime.substring(0, 2));
  console.log("startTimeHour", startTimeHour);
  const startTimeMinutes = Number(startTime.substring(3, 5));
  console.log("startTimeMinutes", startTimeMinutes);
  const startTimeTotalMinutes = startTimeHour * 60 + startTimeMinutes;

  // ★追加
  // hourとminutesに分けてhourをminutesに変換（休憩時間）
  const timeBreakHour = Number(timeBreak.substring(0, 2));
  const timeBreakMinutes = Number(timeBreak.substring(3, 5));
  const timeBreakTotalMinutes = timeBreakHour * 60 + timeBreakMinutes;

  // ★追加
  // hourとminutesに分けてhourをminutesに変換（働く時間）
  const workTimeHour = Number(workTime.substring(0, 2));
  const workTimeMinutes = Number(workTime.substring(3, 5));
  const workTimeTotalMinutes = workTimeHour * 60 + workTimeMinutes;

  // ★追加
  // 全項目のminutesを加算
  let totalTimeMinutes =
    startTimeTotalMinutes + timeBreakTotalMinutes + workTimeTotalMinutes;
  // minutesをhourに変換 Matg.floorで小数点を切り捨て
  const totalTimeHour = Math.floor(totalTimeMinutes / 60);
  // minutesを算出
  // totalTimeMinutes % 60 で１時間で割り切れるかどうか
  totalTimeMinutes = totalTimeMinutes % 60 > 0 ? totalTimeMinutes % 60 : 0;

  // ★追加
  // 算出結果を文字列としてgetOffWorkに代入
  let getOffWork =
    totalTimeHour.toString() + ":" + ("00" + totalTimeMinutes).slice(-2);

  return (
    <div className="homepage">
      <h1>今日何時にあがる？</h1>
      <br />
      <TimePickers
        value={startTime}
        handleMethods={handleStartWorkTime}
        message="何時に出勤しましたか？"
        className="timepicker1"
      />
      <br />
      <TimePickers
        value={timeBreak}
        handleMethods={handleTimeBreak}
        message="トータルの休憩時間は？"
      />
      <br />

      <TimePickers
        value={workTime}
        handleMethods={handleWorkTime}
        message="何時間働く予定でしたか？"
      />
      <br />
      <br />

      <p>
        今日は <span className="getofftime">{getOffWork}</span> に退勤予定です
      </p>
    </div>
  );
};

export default HomePage;
