const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  if (license === "MIT") {
    badge =
      "![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)";
  } else if (license === "Apache 2.0") {
    badge =
      "![License](https://img.shields.io/badge/License-Apache%292.0-blue.svg)";
  } else if ("GPL v3.0") {
    badge =
      "![License: GPL v3](https://img/shields.io/badge/License-GPLv3-blue.svg)";
  } else {
  }
  return badge;

  // }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = "";
  if (license === "MIT") {
    link = "https://choosealicense.com/license/mit/";
  } else if (license === "Apache 2.0") {
    link = "https://apache.org/license/LICENSE-2.0";
  } else if ("GPL v3.0") {
    link = "https://wwww.gnu.org/licenses";
  } else {
    link = "";
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let section = "";
  // TODO: Create a function to generate markdown for README
  if (license === "None") {
    section = "";
  } else {
    section = `Licenese: $license}`;
  }
  return section;
}
function generateMarkdown(data) {
  return `# ${data.title}

# Table of Content
-[description](#description)
-[installation](#installation)
-[usage](#usage)
-[licenses](#licenses)
-[contribution](#contribution)
-[test](#test)
-[username](#username)
-[profile](#profile)

${data.username}
##username:

    ${data.description}
##description:

    ${data.installation}
##installation:

    ${data.usage}
##usage:

    ${data.licenses}
##licenses:

    ${data.contribution}
##contribution:

    ${data.test}
##test:

    ${data.email}
##email:

##questions:
  ${data.questions}
`;
}

module.exports = generateMarkdown;
