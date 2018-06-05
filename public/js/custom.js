$(function() {
  $('#promocodeButton').on('click', function() {
    var input = $('#code').val();
    if (input === '') {
      return false;
    } else {
      $.ajax({
        type: 'POST',
        url: '/promocode',
        data: {
          promocode: input
        },
        success: function(data) {
          if (data === 0) {
            $('#promocodeResponse').html("Code Doesn't exist");
          } else {
            $('#promocodeButton').html('Applied');
            $('#promocodeButton').prop('disabled', true);
            $('#promocodeResponse').html("Successfully Applied the code!");
            $('#totalPrice').html(data);
          }
        }
      });
    }
  });
})
