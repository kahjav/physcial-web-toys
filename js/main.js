/*
  Return a random element from the passed in array.
  http://stackoverflow.com/questions/4550505/getting-random-value-from-an-array
*/
if(window.navigator) {
  var battery = window.navigator.battery
  var vibrate = window.navigator.vibrate
}

if (battery) {
   document.getElementById('battery').innerHTML = "Battery: " + battery.level + (battery.charging ? "(charging)" : "")
}

if ('Notification' in window) {
  var notification = new Notification('Ah!', {
  body: 'Notifications work!'
});

}

if ('ondeviceproximity' in window) {
  window.addEventListener('userproximity', function(event) {
    document.getElementById('proximity').innerHTML = ( (event.near ? '' : 'no ') + 'object detected nearby');
  });
}

if (vibrate) {
  navigator.vibrate(3000)
}
