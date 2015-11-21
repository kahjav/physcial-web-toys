/*
  Return a random element from the passed in array.
  http://stackoverflow.com/questions/4550505/getting-random-value-from-an-array
*/
var batteryDisplay = document.getElementById('battery')

navigator.getBattery().then(function (battery) {
  battery.addEventListener('chargingchange', displayBattery(battery));
  battery.addEventListener('levelchange', displayBattery(battery));
}, function () {
  batteryDisplay.innerHTML = 'Battery API not Present'
})


function party() {
  navigator.vibrate(100)
  document.body.style.backgroundColor = "#" + Math.floor(Math.random()*256).toString(16) + Math.floor(Math.random()*256).toString(16) + Math.floor(Math.random()*256).toString(16)
  setTimeout(party, 200)
}

party()

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



function displayBattery(battery) {
  batteryDisplay.innerHTML = "Battery: " + battery.level * 100 + "%" + (battery.charging ? "(charging)" : "")
}
