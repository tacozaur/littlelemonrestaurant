const APIstyles = {
  timeUnavailable: {
    color: 'red'
  }
}

export const fetchAPI = function(date) {
    const availableTimes = [];
    const startHour = 17;
    const endHour = 22;
    const minutes = ['00', '30'];

    for (let i = startHour; i <= endHour; i++) {
      for (let j = 0; j < minutes.length; j++) {
        const time = `${i.toString().padStart(2, '0')}:${minutes[j]}`;
        const isAvailable = Math.random() < .7;
        const style = isAvailable ? null : APIstyles.timeUnavailable;
        availableTimes.push({ time, isAvailable, style });
      }
    }

    return Promise.resolve(availableTimes);
  }

  export const submitAPI = function(formData) {
    return true;
  }
