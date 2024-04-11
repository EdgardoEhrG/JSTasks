/**
 * Returns a res of validation of e-mail
 * @param {string} - e-mail
 * @returns {boolean} - is e-mail or not
 */

const isEmail = (email) => {
  if (email.indexOf("@") === -1) return false;

  const [localPart, domain] = email.split("@");

  if (localPart.length === 0 || domain.length < 3) return false;

  const domainExtension = domain.split(".");

  if (domainExtension.length < 2) return false;

  return true;
};

const res1 = isEmail("test@gmail.com");
const res2 = isEmail("testgmail.com");

console.log(res1);
console.log(res2);
