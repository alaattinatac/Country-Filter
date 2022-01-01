const countries = ['Albania', 'bolivia', 'Canada', 'Bali', 'denmark', 'czech republic', 'ethiopia', 'Finland', 'Germany', 'hungary', 'Ireland', 'Japan', 'Kenya', 'United States']

// 1.	Extract all the countries contain the word 'land' from the countries array and print it as array
// step-1 

function countryFind1(arr) {
  let countryFound = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i].includes("land")) {
      countryFound.push(arr[i]);
    }
  }
  return countryFound
}
console.log(countryFind1(countries));

// 2.	Find the country containing the hightest number of characters in the countries array
// step-2

function longestCountry(arr) {
  let longest = "";
  for (i = 0; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i];
    }
  }
  return longest;
}
console.log(longestCountry(countries));

// 3. Sort the countries by length of characters in the countries array
// step-3

function countrySort(arr) {
  let continued;
  let newLength = arr.length - 1;
  do {
    continued = false;
    for (let i = 0; i < newLength; i++) {
      if (arr[i].length > arr[i + 1].length) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        continued = true;
      }
    }
    newLength--;
  } while (continued);
  return arr;
}
console.log(countrySort(countries));

// 4.	Extract all the countries containing only four characters from the countries array and print it as array
// step-4

function countryFind4(arr) {
  let countryFound = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i].length === 4) {
      countryFound.push(arr[i]);
    }
  }
  return countryFound
}
console.log(countryFind4(countries));


// 5.	Extract all the countries containing two or more words from the countries array and print it as array
// step-5

function countryFind5(arr) {
  let countryFound = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i].includes(" ")) {
      countryFound.push(arr[i]);
    }
  }
  return countryFound
}
console.log(countryFind5(countries));

// 6.	Reverse the countries array and capitalize each country and stored it as an array.
//step-6

function countryFind6(arr){
  let countryFound = [];
  for (i=0; i<arr.length; i++){ 
    if(arr[i].includes(" ")){
      let doubleWord = arr[i].split(' ')
      for (j=0 ; j < doubleWord.length ; j++){ 
        doubleWord[j] = doubleWord[j].charAt(0).toUpperCase() + doubleWord[j].substring(1);
      }
      countryFound.push(doubleWord.join(' '))
      } else {
      countryFound.push(arr[i][0].toUpperCase() + arr[i].substring(1));
    }
    }
    return countryFound;
  }
console.log(countryFind6(countries));

// 7.	Extract all the countries don’t contain the word 'land' from the countries array, add “land” at the end of the country and print it as array.
// step-7

function countryFind7(arr) {
  let countryFound = [];
  for (i = 0; i < arr.length; i++) {
    if (!arr[i].includes("land")) {
      countryFound.push(arr[i].concat('land'));
    }
  }
  return countryFound
}
console.log(countryFind7(countries));