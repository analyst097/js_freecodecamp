const tekkenCharacter = {
    player: 'Hwoarang',
    fightingStyle: 'Tae Kwon Doe',
    human: true
  };

  tekkenCharacter.origin = 'South Korea';
  tekkenCharacter['hair color'] = 'dyed orange';

  const eyes = 'eye color';

tekkenCharacter[eyes] = 'brown';

var obj = {
    player: 'Hwoarang',
    fightingStyle: 'Tae Kwon Doe',
    human: true,
    origin: 'South Korea',
    'hair color': 'dyed orange',
    'eye color': 'brown'
  };

  let nestedObject = {
    id: 28802695164,
    date: 'December 31, 2016',
    data: {
      totalUsers: 99,
      online: 80,
      onlineStatus: {
        active: 67,
        away: 13,
        busy: 8
      }
    }
  };
  nestedObject.data.onlineStatus.busy = 10;


  let inventory = foods[selectedFood];

  delete foods.apples;

  users.hasOwnProperty('Alan');

  for (let user in users) {
    console.log(user);
  }

//   We can also generate an array which contains all the keys stored in an object using the Object.keys() method and passing in an object as the argument. This will return an array with strings 
// representing each property in the object. Again, there will be no specific order to the entries in the array.