// Function to display current time and date
function displayDateTime() {
  const now = new Date();
  const timeElement = document.getElementById('time');
  const dateElement = document.getElementById('date');

  const options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
  timeElement.textContent = now.toLocaleTimeString('en-US', options);

  const dateFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  dateElement.textContent = now.toLocaleDateString('en-US', dateFormatOptions);
}

// Function to open alarm setting
function openAlarmSetting() {
  document.getElementById('alarmSetting').classList.remove('hidden');
}

// Function to close alarm setting
function closeAlarmSetting() {
  document.getElementById('alarmSetting').classList.add('hidden');
}

// Function to save alarm
function saveAlarm() {
  const alarmTime = document.getElementById('alarmTime').value;
  const alarmTone = document.getElementById('alarmTone').value;

  // Store alarm data (you might use local storage or a backend to save alarms)
  // For now, let's assume you have an array of alarms
  const alarm = { time: alarmTime, tone: alarmTone };
  // You can save this alarm in an array or store it using a database or local storage

  // Display the saved alarm in the list
  displayAlarm(alarm);

  closeAlarmSetting(); // Close the alarm setting after saving
}

// Function to display saved alarms
function displayAlarm(alarm) {
  const alarmList = document.getElementById('alarmList');
  const li = document.createElement('li');
  li.textContent = `${alarm.time} - ${alarm.tone}`;
  alarmList.appendChild(li);
}

// Event listener for setting alarms (You might use events to trigger alarm functionality)
// For example, triggering alarm at a specific time

// Function to check and trigger alarm
function checkAlarms() {
  // Get current time
  const now = new Date();
  const currentTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

  // Compare current time with saved alarms and trigger the alarm
  const savedAlarms = []; // Replace this with your stored alarms
  savedAlarms.forEach(alarm => {
    if (alarm.time === currentTime) {
      // Trigger the alarm tone (play the sound)
      const alarmSound = document.getElementById('alarmSound');
      alarmSound.play();

      // Ask user to snooze or dismiss
      const shouldSnooze = confirm('Alarm! Snooze?');
      if (shouldSnooze) {
        // Implement snooze functionality
        // You can add snooze functionality here
      } else {
        // Implement dismiss functionality
        // You can stop the alarm sound and remove it from the list of active alarms
        alarmSound.pause();
        alarmSound.currentTime = 0;
      }
    }
  });
}

// Update current time continuously
setInterval(displayDateTime, 1000); // Update every second

// Check for alarms continuously
setInterval(checkAlarms, 1000); // Check every second
