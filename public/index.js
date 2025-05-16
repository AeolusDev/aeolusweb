window.onload= function() {
  Particles.init({
    selector: '.background',
    connectParticles: true,
    color: "#A020F0",
  });
};

/**
 * Birthday Display
 */

function calculateYearsSince(dateString) {
  const pastDate = new Date(dateString);

  const currentDate = new Date();

  const timeDifference = currentDate - pastDate;

  const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;

  // Calculate the number of years
  const years = timeDifference / millisecondsInYear;

  return years;
}

const age = calculateYearsSince('2007-09-01');
const roundedAge = Math.floor(age);
document.getElementById('date').innerHTML = roundedAge;