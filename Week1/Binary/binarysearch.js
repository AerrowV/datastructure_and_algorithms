const values = [21, 22, 23, 25, 27, 28, 29, 31, 32, 34, 35];

let count = 0;

function binarySearch(searchFor, values) {
  console.log("I gang med at søge efter " + searchFor);

  let min = 0;
  let max = values.length - 1;
  let found = false;
  let middle;

  while (min <= max && !found) {
    middle = max - Math.floor((max - min) / 2);

    console.log("Min: ", min, "Max: ", max, "Mid: ", middle);

    if (values[middle] == searchFor) {
      console.log("Fundet det! " + values[middle]);
      found = true;
    }

    if (values[middle] < searchFor) {
      console.log("For lavt " + values[middle]);
      min = middle + 1;
    }
    if (values[middle] > searchFor) {
      console.log("For højt " + values[middle]);
      max = middle - 1;
    }
    count++
    console.log("Count: " + count)
  }
    return middle
}

const result = binarySearch(35, values);
console.log("Resultat:", result);
