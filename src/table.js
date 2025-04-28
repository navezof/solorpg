export const distance = {
  name: 'Distance',
  dice: '1d6',
  entries: [
    { number: '1', element: 'Close' },
    { number: '2-3', element: 'Near at #1d3 meter' },
    { number: '4-6', element: 'Far' }],
};

export const roomType = {
  name: 'Room Type',
  dice: '1d10',
  entries: [
    { number: '1-2', element: 'Empty' },
    { number: '3', element: '{Trap}' },
    { number: '4', element: 'Minor hazard' },
    { number: '5', element: 'Solo monster' },
    { number: '6', element: 'NPC' },
    { number: '7', element: 'Monster mob' },
    { number: '8', element: 'Major hazard' },
    { number: '9', element: 'Treasure' },
    { number: '10', element: 'Boss monster' },
  ],
};

export const trap = {
  name: 'Trap',
  dice: '1d6',
  entries: [
    { number: '1', element: 'Pit' },
    { number: '2', element: 'Poison dart' },
    { number: '3', element: 'Fireball' },
    { number: '4', element: 'Gas' },
    { number: '5', element: 'Blade' },
    { number: '6', element: 'Electricity' },
  ],
};

export const tables = [
  distance,
  roomType,
  trap,
];
