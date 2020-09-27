window.addEventListener('DOMContentLoaded', function(){
  'use strict';

    const btnKick = document.getElementById('btn-kick');

    const character = {
      name: 'Pickachu',
      defaultHP: 100,
      damageHP: 100,
      helth: document.getElementById('health-character'),
      progressbar: document.getElementById('progressbar-character')
    };

    const enemy = {
      name: 'Charmander',
      defaultHP: 100,
      damageHP: 100,
      helth: document.getElementById('health-enemy'),
      progressbar: document.getElementById('progressbar-enemy')
    };

    btnKick.addEventListener('click', function(){
      changeHP(random(10), character);
      changeHP(random(10), enemy);
      renderHP(character);
      renderHP(enemy);
    });

    function random(num) {
      return Math.ceil(Math.random() * num);
    }

    function changeHP(count, person) {

      if (person.damageHP < count) {
        person.damageHP = 0;
        alert(person.name + ' Вы проиграли!');
        btnKick.disabled = true;
      } else {
        person.damageHP -= count;
      }

    }

    function renderHP(person) {
      renderHPLife(person);
      renderProgressbar(person);
    }

    function renderProgressbar(person) {
      person.progressbar.style.width = person.damageHP + '%';
    }

    function renderHPLife(person) {
      person.helth.innerText = person.damageHP + '/' + person.defaultHP;
    }




});