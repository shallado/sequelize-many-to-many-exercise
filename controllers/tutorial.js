const { Tutorial } = require('../models');

exports.createTutorial = (tutorialInfo) => {
  return Tutorial.create(tutorialInfo)
    .then((tutorial) => ({
      message: 'Successfully create tutorial',
      data: tutorial.get()
    }))
    .catch(() => console.log('Error while creating a tutorial', err));
};