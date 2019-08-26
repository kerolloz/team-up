(function() {
  let id = 0;
  const segments = $('.segment').toArray();
  const colors = [
    'Red',
    'Orange',
    'Yellow',
    'Olive',
    'Green',
    'Teal',
    'Blue',
    'Violet',
    'Purple',
    'Pink',
    'Brown',
    'Grey',
    'Black'
  ];
  for (let segment of segments) {
    segment.classList.add(colors[id].toLowerCase());
    segment.id = ++id;
  }
})();
