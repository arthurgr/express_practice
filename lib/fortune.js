const fortuneCookies = [
  'fortune cookies 1',
  'fortune cookies 2',
  'fortune cookies 3',
  'fortune cookies 4',
  'fortune cookies 5',
];

exports.getFortune = () => {
  const idx = Math.floor(Math.random() * fortuneCookies.length);
  return fortuneCookies[idx];
};
