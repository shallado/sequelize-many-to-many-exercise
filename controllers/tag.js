const { Tag, Tutorial } = require('../models');

exports.createTag = (tagInfo) => {
  return Tag.create(tagInfo)
    .then((tag) => ({
      message: 'Successfully created Tag',
      data: tag.get()
    }))
    .catch((err) => console.log('Error creating a tag', err));
};

exports.addTutorial = (tagId, tutorialId) => {
  return Tag.findByPk(tagId)
    .then((tag) => Tutorial.findByPk(tutorialId)
      .then((tutorial) => tag.addTutorial(tutorial)
          .then((data) => ({
            message: 'Successfully added tutorial',
            data
          }))
          .catch((err) => console.log('Error add tutorial', err))
      )
      .catch((err) => console.log('Error finding tutorial data', err))
    )
    .catch((err) => console.log('Error finding tag data', err));
};

exports.findAllTags = () => {
  return Tag.findAll({
      include: [{
        model: Tutorial,
        as: 'tutorials'
      }]
    })
    .then((tags) => tags.map((tag) => tag.get()))
    .catch((err) => console.log('Error finding tags', err));
};