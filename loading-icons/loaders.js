$(document).ready(function() {
  $('input:radio[name=container-1-shape]').change(function () {
    changeSpinnerShape( $(this).val() );
  });
});

function changeSpinnerShape(number) {
  var numOfShapes = 4;
  for (i = 1; i <= 4; i++) {
    $('.spinner').removeClass(`spinner-shape-${i}`);
  }
  $('.spinner').addClass(`spinner-shape-${number}`);
}
