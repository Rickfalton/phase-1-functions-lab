const blockLengthInFeet = 264; // Length of a block in feet
const hqLocation = 42; // Headquarters location in blocks

// Function to calculate the distance from HQ in blocks
function distanceFromHqInBlocks(block) {
  return Math.abs(block - hqLocation);
}

// Function to calculate the distance from HQ in feet
function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * blockLengthInFeet;
}

// Function to calculate the distance travelled in feet between two points
function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * blockLengthInFeet;
}

// Function to calculate the fare price based on the distance travelled
function calculatesFarePrice(start, destination) {
  const distanceInFeet = distanceTravelledInFeet(start, destination);

  if (distanceInFeet <= 400) {
    return 0; // Free sample for distances up to 400 feet
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    return (distanceInFeet - 400) * 0.02; // 2 cents per foot for distances between 400 and 2000 feet
  } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
    return 25; // Flat rate of $25 for distances between 2000 and 2500 feet
  } else {
    return 'cannot travel that far'; // Distance is too far to travel
  }
}

