console.log("working");

function autoIncrementer(intialValue = 0, steps = 10) {
  let value = intialValue;
  let setIntervalId;
  const increment = () => {
    if (setIntervalId === null) {
      setIntervalId = setInterval(() => {
        value += steps;
        console.log(value);
      }, 1000);
    }
  };

  const pause = () => {
    clearInterval(setIntervalId);
  };
  return {
    increment,
    pause,
  };
}

const options = autoIncrementer(0, 10);
options.increment();

setTimeout(() => {
  options.pause();
}, 6000);
