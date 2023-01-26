let countDownTimer = d => {
  //expects date in format of '2021-04-15'
  const targetDate = +new Date(d);
  const currentDate = +new Date();
  let difference = targetDate - currentDate;
  if (difference > 0) {
    const parts = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  } else {
    const parts = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
    return parts;
  }
};

export default countDownTimer;
