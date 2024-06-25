// => Convert today date input format
const today = new Date().toISOString().split("T")[0];
start_date.value = today;
start_date.min = today;

// => Tomorrow date calc
let tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
console.log(tomorrow);

// => Convert to input format
let tomorrowFormat = tomorrow.toISOString().split("T")[0];
end_date.value = tomorrowFormat;
end_date.min = tomorrowFormat;

// => Change event pour lui dire à chaque changement sur l'input tu fais ça

// START INPUT
start_date.addEventListener("change", (e) => {
  let day = new Date(e.target.value);

  if (end_date.value < start_date.value) {
    day.setDate(day.getDate() + 1);
    end_date.value = day.toISOString().split("T")[0];
  }
});

// END INPUT
end_date.addEventListener("change", (e) => {
  let day = new Date(e.target.value);

  if (end_date.value < start_date.value) {
    day.setDate(day.getDate() - 1);
    start_date.value = day.toISOString().split("T")[0];
  }
});

// => Day number calc
const bookingCalc = () => {
  // => difftime est en ms
  let diffTime = Math.abs(
    new Date(end_date.value) - new Date(start_date.value)
  );
  //   => ici on passe la valeur de difftime en jour
  let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  totalPerNight.textContent = diffDays * nightPrice.textContent + " $";
};

// => Ici on lui fait jouer la fonction bookingCalc dès qu'on change les inputs
start_date.addEventListener("change", bookingCalc);
end_date.addEventListener("change", bookingCalc);
