/*
  Return a random element from the passed in array.
  http://stackoverflow.com/questions/4550505/getting-random-value-from-an-array
*/
if(window.navigator) {
  var vibrate = window.navigator.vibrate
}
var batteryDisplay = document.getElementById('battery')

navigator.getBattery().then(function (battery) {
   batteryDisplay.innerHTML = "Battery: " + battery.level + (battery.charging ? "(charging)" : "")

   battery.addEventListener('chargingchange', function() {
    batteryDisplay.innerHTML = "Battery charging? " + (battery.charging ? "Yes" : "No")
  });

  battery.addEventListener('levelchange', function() {
    batteryDisplay.innerHTML = "Battery level: " + battery.level * 100 + "%"
  });

  battery.addEventListener('chargingtimechange', function() {
    batteryDisplay.innerHTML =  "Battery charging time: " + battery.chargingTime + " seconds"
  });

  battery.addEventListener('dischargingtimechange', function() {
    batteryDisplay.innerHTML = "Battery discharging time: " + battery.dischargingTime + " seconds"
  });
}, function () {
  batteryDisplay.innerHTML = 'Battery API not Present'
})

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
