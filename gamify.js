// variable for container of calendar
const calendarContainer =
  document.getElementsByClassName('calendar-container')[0];

// variable for calendar itself
const calendar = new Pikaday({
  firstDay: 1,
  showWeekNumber: true,
  onSelect: function () {
    document.getElementsByClassName(
      'rounded-button-black-border-2'
    )[0].style.display = 'inline-flex';
  },
});

// adds calendar inside container (child)
calendarContainer.appendChild(calendar.el);

// variable for button to add date
const addDateButton = document.getElementsByClassName(
  'rounded-button-black-border-2'
)[0];

addDateButton.addEventListener('click', () => {
  const date = calendar.getDate();
});
