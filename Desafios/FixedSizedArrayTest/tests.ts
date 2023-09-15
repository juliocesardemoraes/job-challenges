let failedTests = 0;
let totalTests = 0;
console.assert = (flag, message) => {
  totalTests++;
  if (!flag) {
    console.log(message);
    failedTests++;
  }
};

export function RunTestSuite(fifo: number[], Push: any, Pop: any) {
  /* ---------- Test Cases ---------- */
  console.log("\n\n---------- Starting Tests ----------");

  // Queue is empty
  console.assert(false === Pop(), "empty pop test failed");

  // Push values on to the array until it is full
  for (let value = 1; value <= fifo.length; value++) {
    // Expect to push values onto the array as long as there is room
    console.assert(Push(value) === true, `push test #${value} failed`);
  }
  // Queue is now full

  // Make sure you cannot push more values onto a full queue
  console.assert(Push(1) === false, `push onto full queue test 1 failed`);
  console.assert(Push(1) === false, `push onto full queue test 2 failed`);

  // Pop all the values off of the queue
  for (let value = 1; value <= fifo.length; value++) {
    // Expect a value to be returned as long there are values in the array
    console.assert(Pop() === value, `pop test #${value} failed`);
  }
  // Queue is empty

  // Ensure you cannot pop values from an empty queue
  console.assert(Pop() === false, `pop from empty queue test 1 failed`);
  console.assert(Pop() === false, `pop from empty queue test 2 failed`);

  // Random insert/removeal
  console.assert(Push(10) === true, `Random insert/removal test 1 failed`);
  console.assert(Push(20) === true, `Random insert/removal test 2 failed`);
  console.assert(Push(30) === true, `Random insert/removal test 3 failed`);
  console.assert(Pop() === 10, `Random insert/removal test 4 failed`);
  console.assert(Push(40) === true, `Random insert/removal test 5 failed`);
  console.assert(Push(50) === true, `Random insert/removal test 6 failed`);
  console.assert(Pop() === 20, `Random insert/removal test 7 failed`);
  console.assert(Push(60) === true, `Random insert/removal test 8 failed`);
  console.assert(Push(70) === true, `Random insert/removal test 9 failed`);
  console.assert(Push(80) === false, `Random insert/removal test 10 failed`);

  console.log("---------- Done Testing ----------\n\n");
  if (0 === failedTests) {
    console.log(`✅ test suite passed! ${totalTests} test passed`);
  } else {
    console.log(
      `❌ test suite failed. ${failedTests}/${totalTests} tests failed`
    );
  }
}
