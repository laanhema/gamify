// variable for container of calendar
const calendarContainer =
  document.getElementsByClassName('calendar-container')[0];

// variable for calendar itself
const calendar = new Pikaday({
  firstDay: 1,
  showWeekNumber: true,
  onSelect: function (date) {
    // field.value = picker.toString();
    // this.hide();
  },
});
// adds calendar inside container (child)
calendarContainer.appendChild(calendar.el);
