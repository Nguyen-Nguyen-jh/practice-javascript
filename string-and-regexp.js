/* Using Regexp: Create a function to check that if Email is valid of not */

const isValidEmail = (email) => {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
};

console.log(isValidEmail('ndn030802@gmail.com'));

/* Using Regexp: Create a function to check that if password is valid or not - Has at least 8 characters 
  with at least 1 uppercase letter, 1 number, 1 special character. */

const isValidPassword = (password) => {
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordPattern.test(password);
};

console.log(isValidPassword('Nfuahw3@'));
