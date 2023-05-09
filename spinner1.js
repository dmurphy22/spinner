const animateSpinner = function(delay, times) {
  const chars = ['|', '/', '-', '\\', '|'];
  let index = 0;
  for (let i = 0; i < times; i++) {

    setTimeout(() => {
      process.stdout.write(`\r${chars[index]}   `);
      index = (index + 1) % chars.length;
      animateSpinner(delay);
    }, delay);
  }
};

animateSpinner(100, 5);