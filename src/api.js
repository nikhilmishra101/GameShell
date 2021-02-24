//Base URL

const base_url = "https://api.rawg.io/api/";

//Getting the Month
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

//Getting the Day
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//Current day/month/year

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentday = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentday}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentday}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentday}`;

//Popular Games

const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
