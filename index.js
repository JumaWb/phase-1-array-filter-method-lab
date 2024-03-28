function findMatching(driverNames, caseSens) {
    // Convert caseSens to lowercase for case-insensitive matching
    caseSens = caseSens.toLowerCase();

    // Use filter to find matching names
    const matchingNames = driverNames.filter(name => {
        const lowerName = name.toLowerCase();
        return lowerName.includes(caseSens);
    });

    return matchingNames;
}

// Example usage:
const driverNames = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
const searchName = 'b';
const matchingNames = findMatching(driverNames, searchName);
console.log(matchingNames); // Output: ["Bobby", "Bobby"]

function fuzzyMatch(driversNames, query) {
    query = query.toLowerCase();
    const matchingNames = driversNames.filter(name => {
        const lowerName = name.toLowerCase();
        return lowerName.startsWith(query);
    });
    return matchingNames;
  }
  
  const driversNames = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
  const query = 'b';
  const matchingDrivers = fuzzyMatch(driversNames, query);
  console.log(matchingDrivers);
  