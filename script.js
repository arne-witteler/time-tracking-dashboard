let trackingData = [];

fetch('/data.json').then((response) => {  
  return response.json();
}).then((data) => {
  trackingData = data;
  updateCards('weekly');
});

const updateCards = (timeframe) => {
  trackingData.forEach((item) => {
    const className = item.title.toLowerCase().replace(' ', '-');

    const card = document.querySelector(`.${className}`);

    const currentHours = card.querySelector('.card__hours');
    const previousHours = card.querySelector('.card__previous');

    const dataSet = item.timeframes[timeframe];

    currentHours.textContent = dataSet.current + 'hrs';
    previousHours.textContent = `Last Week - ${dataSet.previous} hrs`;
  })};

const buttons = document.querySelectorAll('.profile__button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(button => button.classList.remove('active'));
    button.classList.add('active');

    const clickedTimeframe = button.id;
    updateCards(clickedTimeframe);
  })});