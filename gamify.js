let field = document.getElementById('datepicker');
let picker = new Pikaday({
  onSelect: function (date) {
    field.value = picker.toString();
  },
});
field.parentNode.insertBefore(picker.el, field.nextSibling);
