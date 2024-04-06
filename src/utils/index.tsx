export const getNextDays = () => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const next3Days = [];
  for (let i = 0; i < 7; i++) {
    next3Days.push(days[new Date(Date.now() + (i + 1) * 24 * 60 * 60 * 1000).getDay()]);
  }
  return next3Days;
};

  export  const changeUnitWind = (speed: number) => {
    return Math.round(speed * 3.6);
  }
