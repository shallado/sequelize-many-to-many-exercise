const { Tag, Tutorial } = require('../models');

exports.createTag = (tagInfo) => {
  return Tag.create(tagInfo)
    .then((tag) => ({
      message: 'Successfully created Tag',
      data: tag.get()
    }))
    .catch((err) => console.log(err));
};

exports.addTutorial = (tagId, tutorialId) => {
  Tag.findByPk(tagId)
    .then((tag) => {
      Tutorial.findByPk(tutorialId)
        .then((tutorial) => tag.addTutorial(tutorial))
        .catch((err) => console.log(err))
    })
    .catch((err) => console.log(err));
};