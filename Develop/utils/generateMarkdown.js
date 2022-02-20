// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  console.log(license);
  if (license === "") {
    console.log("license is empty");
    return "";
  }
  let licenseType = data.license;
  let yourLicense = "";
  if (licenseType === "MIT") {
    yourLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  }
  if (licenseType === "ISC") {
    yourLicense = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
  }
  if (licenseType === "Apache") {
    yourLicense = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }
}
// If there is no license, return an empty string

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  if (license === "") {
    console.log("License is empty");
    return ``;
  }
  else if (license === "MIT") {
    return `https://opensource.org/licenses/Apache-2.0`;
  }
  else if (license === "Apache") {
    return `https://opensource.org/licenses/Apache-2.0`;
  }
  else if (license === "ISC") {
    return `https://opensource.org/licenses/ISC`;
  }
}
// If there is no license, return an empty string

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}`;
}

module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
  generateMarkdown,
};
