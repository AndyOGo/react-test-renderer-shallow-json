module.exports = {
  '(src|test)/**/*.[tj]s': (filenames) => [
    `eslint --fix ${filenames.join(' ')}`,
    `jest -u --bail --findRelatedTests ${filenames.join(' ')}`,
  ],
  '(README).md': ["doctoc --title '**Table of Contents**'"],
};
