function queueTime(customers, n) {
  //TODO

  let counters = [];
  for (let i = 0; i < n; i++) {
    counters[i] = 0;
  }
  customers.forEach(customer => {
    let minCounterTime = counters.indexOf(Math.min(...counters));
    counters[minCounterTime] += customer;
    // console.log(`customers${customer}`);
    // console.log(counters[minCounterTime]);
  });

  return Math.max(...customers);
}

console.log(queueTime([2, 2, 3, 3, 4, 4], 2));
