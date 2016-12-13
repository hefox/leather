'use strict';

/**
 * information about leather bars
 */
/*exported LeatherBars */

function LeatherBars() {
  this.info = {
    'ambush' : {
      title: 'Ambush Bar',
      latitude: 37.77185,
      longitude: -122.41057,
      address: '1351 Harrison St, San Francisco, CA 94103',
    },
    'febes' : {
      title: 'Fe-Bes',
      latitude: 37.77158,
      longitude: -122.414,
      address: '1501 Folsom St, San Francisco, CA 94103',
    },
    'studorig' : {
      title: 'The Stud',
      latitude: 37.77138,
      longitude: -122.41433,
      address: '1535 Folsom St, San Francisco, CA 94103',
    },
    'driftwood' : {
      title: 'The Ramrod, My Place, Cip, Chaps II, Kok',
      latitude: 37.77449,
      longitude: -122.41033,
      address: '1225 Folsom St, San Francisco, CA 94103',
    },
    'music' : {
      title: 'Sound of music',
      latitude: 37.78337,
      longitude: -122.41186,
      address: '162 Turk St, San Francisco, CA 94102',
    },
    'chaps' : {
      title: 'Chaps',
      latitude: 37.77109,
      longitude: -122.41265,
      address: '375 11th St, San Francisco, CA 94103',
    },
    'powerhouse' : {
      title: 'The Brig, Inbetween, the No Name, the Bolt, the Powerhouse',
      latitude: 37.77307,
      longitude: -122.41212,
      address: '1347 Folsom St, San Francisco, CA 94103',
    },
    'arena' : {
      title: 'The Arena, the Stud',
      latitude: 37.77282,
      longitude: -122.41,
      address: '399 9th St, San Francisco, CA 94103',
    },
    'lonestarorg' : {
      title: 'The Lone Star',
      latitude: 37.77826,
      longitude: -122.40942,
      address: '1098 Howard St, San Francisco, CA 94103',
    },
    'blackblue' : {
      title: 'The Black and Blue',
      latitude: 37.77622,
      longitude: -122.41164,
      address: '198 8th St, San Francisco, CA 94103',
    },
    'redstar' : {
      title: 'The Red Star Saloon, Watering Hole',
      latitude: 37.77577,
      longitude: -122.40875,
      address: '1145 Folsom Street, San Francisco, CA 94103',
    },
    'bootcamp' : {
      title: 'Bootcamp',
      latitude: 37.77241,
      longitude: -122.4075,
      address: '1010 Bryant St, San Francisco, CA 94103',
    },
    'cave' : {
      title: 'The Cave, Rawhide II',
      latitude: 37.77681,
      longitude: -122.40852,
      address: '280 7th St, San Francisco, CA 94103',
    },
    'pit' : {
      title: 'Cocktails and The Pit',
      latitude: 37.77501,
      longitude: -122.41284,
      address: '201 9th St, San Francisco, CA 94103',
    },
    'watering' : {
      title: 'The Watering Hole',
      address: '298 6th St, San Francisco, CA 94103',
      latitude: 37.77857,
      longitude:  -122.40595,
    },
    'stables' : {
      title: 'The Stables',
      latitude: 37.77608,
      longitude: -122.40836,
      address: '1123 Folsom St, San Francisco, CA 94103',
    },
    'holeinwall' : {
      title: 'Hole in the Wall',
      latitude: 37.77535,
      longitude: -122.41018,
      address: '289 8th St, San Francisco, CA 94103',
    },
    'mary' : {
      title: 'Hamburger Mary\'s',
      latitude: 37.77104,
      longitude: -122.41499,
      address: '1590 Folsom St, San Francisco, CA 94103',
    },
    'oasis' : {
      title: 'Covered Wagon, Leatherneck, Dirty Sally\'s, San Francisco Plunge, Oasis, Drummer Key Club, the Gold Coast, the Compound',
      latitude: 37.77197,
      longitude: -122.41445,
      address: '298 11th St, San Francisco, CA 94103',
    },
    'toolbox' : {
      title: 'The Toolbox',
      latitude: 37.78129,
      longitude: -122.39985,
      address: '399 4th St, San Francisco, CA 94107',
    },
    'ritch' : {
      title: 'The Ritch Street Health Club',
      latitude: 37.77886,
      longitude: -122.39383,
      address: '330 Ritch St, San Francisco, CA 94107',
      type: 'bathhouse',
    },
    'slot' : {
      title: 'The Slot Hotel',
      latitude: 37.7788,
      longitude: -122.40487,
      address: '979 Folsom St, San Francisco, CA 94107',
      type: 'bathhouse',
    },
    'barracks' : {
      title: 'The Folsom Street Barracks',
      latitude: 37.77589,
      longitude: -122.40893,
      address: '1147 Folsom St, San Francisco, CA 94103',
      type: 'bathhouse',
    },
    'cauldron' : {
      title: 'The Caldron',
      latitude: 37.77382,
      longitude: -122.41506,
      address: '953 Natoma St, San Francisco, CA 94103',
      type: 'bathhouse',
    },
    'sutro' : {
      title: 'The Sutro Bath, Big Town, Folsom Street Baths, Colossus, Product, 1015',
      latitude: 37.77818,
      longitude: -122.40578,
      address: '1015 Folsom St, San Francisco, CA 94103',
      type: 'bathhouse',
    },
    'mrb' : {
      title: 'Mr. B’s Ballroom',
      latitude: 37.77923,
      longitude: -122.40692,
      address: '224 6th St, San Francisco, CA 94103',
      type: 'bathhouse',
    },
    'hothouse' : {
      title: 'The Hothouse',
      latitude: 37.77921,
      longitude: -122.40245,
      address: '374 5th St, San Francisco, CA 94107',
      type: 'bathhouse',
    },
    'handball' : {
      title: 'The Handball Express',
      latitude: 37.77769,
      longitude: -122.40354,
      address: '973 Harrison St, San Francisco, CA 94107',
      type: 'bathhouse',
    },
    'animals' : {
      title: 'Animals',
      latitude: 37.78037,
      longitude: -122.40767,
      address: '161 6th St, San Francisco, CA 94103',
      type: 'bathhouse',
    },
    'clubbaths' : {
      title: 'The Club Baths',
      latitude: 37.77628,
      longitude: -122.41112,
      address: '201 8th St, San Francisco, CA 94103',
      type: 'bathhouse',
    },
    'folsomclub' : {
      title: 'The Folsom Street Club',
      latitude: 37.77289,
      longitude: -122.41273,
      address: '1389 Folsom St, San Francisco, CA 94103',
      type: 'bathhouse',
    },
    '890' : {
      title: '890 Folsom',
      latitude: 37.78061,
      longitude: -122.40332,
      address: '890 Folsom St, San Francisco, CA 94107',
      type: 'bathhouse',
    },
    'somaclub' : {
      title: 'South of Market Club',
      latitude: 37.77959,
      longitude: -122.40651,
      address: '225 6th St, San Francisco, CA 94103',
      type: 'bathhouse',
    },
    'faust' : {
      title: 'Faust Leder',
      latitude: 37.77446,
      longitude: -122.4104,
      address: '1227 Folsom St, San Francisco, CA 94103',
      type: 'other',
    },
    'hardon' : {
      title: 'Hard-On-Leather',
      latitude: 37.78742,
      longitude: -122.42007,
      address: '1133 Polk St, San Francisco, CA 94109',
      type: 'other',
    },
    'taste' : {
      title: 'A Taste of Leather / Trading Post Emporium',
      latitude: 37.77931,
      longitude: -122.40488,
      address: '960 Folsom St, San Francisco, CA 94107',
      type: 'other',
    },
    'leatherworld' : {
      title: 'Leatherworld',
      latitude: 37.78484,
      longitude: -122.41804,
      address: '735 Larkin St, San Francisco, CA 94109',
      type: 'other',
    },
    'ringold' : {
      title: 'Ringold Street',
      latitude: 37.77457,
      longitude: -122.40954,
      address: 'Ringold St, San Francisco, CA 94103',
      type: 'other',
    },
    'eagle' : {
      title: 'SF Eagle',
      latitude: 37.76997,
      longitude: -122.41338,
      address: '398 12th Street'
    },
    'wow' : {
      title: 'Worn Out West',
      latitude: 37.777146,
      longitude: -122.41086,
      address: '1158 Howard St, San Francisco, CA 94103'
    },
    'mrs' : {
      title: 'Mr. S Leather',
      latitude: 37.774125,
      longitude:  -122.408661,
      type: 'other',
      address: '385 8th St, San Francisco, CA 94103'
    },
    'church' : {
      title: 'Church of St. Priapus',
      latitude: 37.7749,
      longitude: -122.41144,
      type: 'bathhouse',
      address: '746 Clementina St, San Francisco, CA 94103'
    },
    'fsb' : {
      title: 'Jim Stewart\'s Place',
      latitude: 37.774712,
      longitude: -122.411793,
      type: 'other',
      address: '766 Clementina St, San Francisco, CA 94103'
    },
  };
  this.getBars = function() {return this.info;};
  this.getBar = function(key) {return this.info[key];};
}
