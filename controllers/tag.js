const { Tag } = require('../models');

exports.createTag = (tagInfo) => {
  Tag.create(tagInfo)
    .then((tag) => console.log({
      message: 'Successfully created Tag',
      data: tag.get()
    }))
    .catch((err) => console.log('Unable to create tag', err));
};