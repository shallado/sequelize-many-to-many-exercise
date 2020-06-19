const { sequelize } = require('./models');
const tag = require('./controllers/tag');
const tutorial = require('./controllers/tutorial');
require('./models');

async function example() {
  const tutorialOne = await tutorial.createTutorial({
    title: "Tut#1",
    description: "Tut#1 Description",
  });

  console.log('>> Successfully created tutorial \n', tutorialOne.data);

  const tutorialTwo = await tutorial.createTutorial({
    title: "Tut#2",
    description: "Tut#2 Description",
  });

  console.log('>> Successfully created tutorial \n', tutorialTwo.data);

  const tutorialThree = await tutorial.createTutorial({
    title: "Tut#3",
    description: "Tut#3 Description",
  });

  console.log('>> Successfully created tutorial \n', tutorialThree.data);

  const tutorialFour = await tutorial.createTutorial({
    title: "Tut#4",
    description: "Tut#4 Description",
  });

  console.log('>> Successfully created tutorial \n', tutorialFour.data);

  const tutorialFive = await tutorial.createTutorial({
    title: "Tut#5",
    description: "Tut#5 Description",
  });

  console.log('>> Successfully created tutorial \n', tutorialFive.data);

  const tagOne = await tag.createTag({ name: "Tag#1" });

  console.log('>> Successfully created tag \n', tagOne.data);

  const tagTwo = await tag.createTag({ name: "Tag#2" });

  console.log('>> Successfully created tag \n', tagTwo.data);
  
  await tag.addTutorial(tagOne.data.id, tutorialOne.data.id);
  await tag.addTutorial(tagOne.data.id, tutorialTwo.data.id);

  await tag.addTutorial(tagTwo.data.id, tutorialThree.data.id);
  await tag.addTutorial(tagTwo.data.id, tutorialFour.data.id);
  await tag.addTutorial(tagTwo.data.id, tutorialFive.data.id);

  const listTags = await tag.findAllTags(); 
  console.log('>> List Tags \n', listTags);

  const findOneTag = await tag.findTag(tagOne.data.id);
  console.log('>> Tag', findOneTag);

  const listTutorials = await tutorial.findAllTutorials();
  console.log('>> List Tutorials',listTutorials);

  const findOneTutorial = await tutorial.findTutorial(tutorialOne.data.id);
  console.log('>> Tutorial', findOneTutorial);
}

sequelize.sync({ force: true })
  .then(() => {
    console.log('Successfully synced models to the database');
    example();
  })
  .catch((err) => console.log('Unable to sync models to the database'))