$("document").ready(function (){

  var currentValue = "";
  var inputs = "";
  var history = "";
  var answer = "";
  var fourFunctions = ['+', '-', '*', '/'];

  function screenMax(inputs, value) {
    if(inputs.length < 10){
      if(value == '.' && inputs.indexOf('.') > -1){
        return inputs;
      } else if (value == '0' && inputs.length == 0){
        return inputs;
      }

      if(value == '.' && inputs.length == 0){
        inputs += '0.';
      } else {
        inputs += value;
      }
      $('#display').text(inputs);
      return inputs;
    } else {
      return inputs;
    }
  }

  function operators(inputs, value){
    inputs += value;
    $('#display').text('0');
    history += inputs;
    $('#history').text(history);
    return inputs = "";
  }

  function equals(history, inputs){
    history += inputs;
    $('#history').text(history);
    return eval(history);
  }


  $('button').click(function() {
    currentValue = $(this).attr('value');
    // Check value for '+', '-', '*', '/'.
    if(fourFunctions.includes(currentValue)){
      inputs = operators(inputs, currentValue);
    }
    // Check value for 'ac'.
    else if(currentValue == 'ac'){
      inputs = "";
      $('#display').text('0');
      history = "";
      $('#history').text('');
    }
    // Check value for 'ce'.
    else if(currentValue == 'ce'){
      inputs = "";
      $('#display').text('0');
    }
    // Check value for '='.
    else if(currentValue == '='){
      answer = equals(history, inputs);
      inputs = "";
      history = answer;
      $('#display').text(answer);
      $('#history').text('');
    }
    // All other button values (0-9).
    else {
    inputs = screenMax(inputs, currentValue);
    }
  });

  $(document).keypress(function (event) {
    console.log("Keypressed: " + event.charCode);
    switch(event.charCode) {
      // Keypress = '+'.
      case 43:
        $('#plus').click();
        break;
      // Keypress = '-'.
      case 45:
        $('#minus').click();
        break;
      // Keypress = '*'.
      case 42:
        $('#times').click();
        break;
      // Keypress = '/'.
      case 47:
        $('#divide').click();
        break;
      // Keypress = '.'.
      case 46:
        $('#decimal').click();
        break;
      // Keypress = '0'.
      case 48:
        $('#zero').click();
        break;
      // All other keypresses.
      default:
        // If keypress is a number (0-9).
        if(event.charCode >= 48 && event.charCode <= 57){
        currentValue = "#" + (event.charCode - 48);
        $(currentValue).click();
        }
        // Ignore all non-number keypresses.
        break;
    }
  });

  $(document).keydown(function(e) {
    // Escape key = AC
    if (e.keyCode == 27) {
      $("#ac").click();
    }
    // Enter key = equals
    else if(e.keyCode == 13){
      $('#equals').click();
    }
  });

});
