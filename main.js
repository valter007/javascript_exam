function main() {
  // Your solution starts here...
  
  console.log("Branislav Dimitrovski");

  var body = $('body');
  var master = $('<div>').attr('id', 'master');
  var wrapper = $('<div>').attr('class', 'master');
  var firstName = $('<p>').text('First Name');
  var firstNInput = $('<input type=text>').attr('class', 'firsName');
  var lastName = $('<p>').text('Last Name');
  var lastNInput = $('<input type=text>').attr('class', 'lastName');
  var mobil = $('<p>').text('Mobile Number');
  var mobilInput = $('<input type=text>').attr('class', 'mobileInput');
  var index = $('<p>').text('Index');
  var indexInput = $('<input type=text>').attr('class', 'index');
  var pause = $('<br/>')
  var submit = $('<button/>').attr('class', 'submit').text('Submit');
  var reset = $('<button/>').attr('class', 'reset').text('Reset');
  wrapper.append(firstName)
  wrapper.append(firstNInput)
  wrapper.append(lastName)
  wrapper.append(lastNInput)
  wrapper.append(mobil)
  wrapper.append(mobilInput)
  wrapper.append(index)
  wrapper.append(indexInput)
  wrapper.append(pause);
  wrapper.append(submit)
  wrapper.append(reset)
  body.append(wrapper);
  body.append(master);
  var holder = $('<div>').attr('class', 'results');
  
  $('.submit').on('click', () => {
    var pause = $('<br/>')
    var name = $('<div>').attr('class', 'name').text($('.firsName').val());
    var lastName = $('<div>').attr('class', 'name').text($('.lastName').val());
    var mobil = $('<div>').attr('class', 'name').text($('.mobileInput').val());
    var index = $('<div>').attr('class', 'name').text($('.index').val());
    holder.append(name)
    holder.append(lastName)
    holder.append(mobil)
    holder.append(index)
    holder.append(pause)
    body.append(holder);
    $('input').val(' ')
  })
  
  $('.reset').on('click', () => {
    $('input').val(' ');
    $('.results').html(' ')
  })};

  main();
