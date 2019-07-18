
 $('#firstName').keyup( function() {
    var firstName = $('#firstName').val();
    $('#displayFirstName').text(firstName);
 });
 $('#lastName').keyup( function() {
     var lastName = $('#lastName').val();
     $('#displayLastName').text(lastName);
 });
 $('#lastName').blur( function() {
     var firstName = $('#firstName').val();
     var lastName = $('#lastName').val();
     var fullName = firstName+' '+lastName;
     $('#displayFullName').text(fullName);
 });

