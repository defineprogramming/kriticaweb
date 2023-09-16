let oldTextDay, oldTextHour, oldTextMinute, oldTextSecond;

const countdown = () => {

  const countDate = new Date('March 1, 2024 00:00:00').getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  const animate = number => {
    number.classList.add('animate');
    setTimeout(() => {
      number.classList.remove('animate');
    }, 500);
  }

  if(textDay < oldTextDay) {
    animate(document.querySelector('.countdown #days'));
  }

  if(textHour < oldTextHour) {
    animate(document.querySelector('.countdown #hours'));
  }

  if(textMinute < oldTextMinute) {
    animate(document.querySelector('.countdown #minutes'));
  }

  if(textSecond < oldTextSecond) {
    animate(document.querySelector('.countdown #seconds'));
  }

  oldTextDay = textDay;
  oldTextHour = textHour;
  oldTextMinute = textMinute;
  oldTextSecond = textSecond;

  document.querySelector('.countdown #days').innerText = textDay;
  document.querySelector('.countdown #hours').innerText = textHour;
  document.querySelector('.countdown #minutes').innerText = textMinute;
  document.querySelector('.countdown #seconds').innerText = textSecond;

};

setInterval(countdown, 1000);
