let field = document.getElementById('datepicker-calendar');
let picker = new Pikaday({
  onSelect: function (date) {
    field.value = picker.toString();
  },
  firstDay: 1,
  showWeekNumber: true,
});
field.parentNode.insertBefore(picker.el, field.nextSibling);

let selectedDate = picker.getDate();
