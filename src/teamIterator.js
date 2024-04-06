export default class Team {
    constructor() {
      this.members = [{
        name: 'Лучник',
        type: 'Bowman',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10,
      },
      {
        name: 'Мечник',
        type: 'Swordsman',
        health: 90,
        level: 3,
        attack: 60,
        defence: 25,
      },
      {
        name: 'Маг',
        type: 'Magician',
        health: 90,
        level: 1,
        attack: 10,
        defence: 35,
      },
      {
        name: 'Зомби',
        type: 'Zombie',
        health: 20,
        level: 1,
        attack: 15,
        defence: 15,
      },
      {
        name: 'Демон',
        type: 'Daemon',
        health: 95,
        level: 2,
        attack: 100,
        defence: 5,
      }];
    }
  
    [Symbol.iterator]() {
      let current = 0;
      const last = this.members.length;
      const persons = this.members;
      return {
        next() {
          if (current < last) {
            current += 1;
            return {
              done: false,
              value: persons[current],
            };
          }
          return {
            done: true,
          };
        },
      };
    }
  }  