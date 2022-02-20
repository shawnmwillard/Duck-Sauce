function generator(userResponse) {
  return `
### License: 
${userResponse.licenseType}

# Title: 
${userResponse.title}

## Description: 
${userResponse.description}

## Table of Contents: 
${userResponse.contents}

### Installation:
${userResponse.installation}

### License:
${userResponse.license}

## Contributors:
${userResponse.contribute}

## Tests: 
${userResponse.tests}

`;
}
module.exports = { generator };
