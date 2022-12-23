'use strict';

const third = document.querySelector('.third');
const months = document.querySelectorAll('.months');
const container = document.querySelector('.container');
const calendarcontainer = document.querySelector('.calendarcontainer');
const backbutton = document.querySelector('.backbutton');
const backsvg = document.querySelector('.backbutton img');

months.forEach((item) => {
  item.addEventListener('click', (evt) => {
    item.classList.add('active');

    months.forEach((monthdiv) => {
      if (!monthdiv.classList.contains('active')) {
        monthdiv.style.opacity = '0';
      }
    });

    calendarcontainer.style.gap = '0';

    // setTimeout( () => {
    //   months.forEach((monthdiv) => {
    //     if (!monthdiv.classList.contains('active')) {
    //       monthdiv.style.display = 'none';
    //     }
    //   })
    // }, 500)

    if (item.classList.contains('first')) {
      calendarcontainer.style.gridTemplate = '1fr 0fr / 1fr 0fr';
    } else if (item.classList.contains('second')) {
      calendarcontainer.style.gridTemplate = '1fr 0fr / 0fr 1fr';
    } else if (item.classList.contains('third')) {
      calendarcontainer.style.gridTemplate = '0fr 1fr / 1fr 0fr';
    } else if (item.classList.contains('fourth')) {
      calendarcontainer.style.gridTemplate = '0fr 1fr / 0fr 1fr';
    }
    item.insertBefore(backbutton, item.children[0]);
    backbutton.style.opacity = '100%';
  });
});

document.querySelector('button').addEventListener('click', (e) => {
  calendarcontainer.style.gridTemplate = '1fr 1fr / 1fr 1fr';
  console.log('helloder');

  months.forEach((monthdiv) => {
    monthdiv.style.opacity = '100%';
  });
});