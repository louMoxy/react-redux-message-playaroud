const shortid = require("shortid"); // shortid.generate() returns a unique "short" id
const txtgen = require("txtgen"); // txtgen.sentence() returns random "readable" sentences
const faker = require("faker"); // faker is used for generating random fake data.
const _ = require("lodash"); // lodash is a utility lib for Javascript

const user = generateuser(10);
export const contacts = _.mapKeys(user, "user_id");
export const getMessages = messagesPerUser => {
  let messages = {};
  _.forEach(user, user => {
    messages[user.user_id] = {
      ..._.mapKeys(generateMsgs(messagesPerUser), "number")
    };
  });
  return messages;
};

// just an example of how the state object is structured
export const state = {
  user: generateUser(),
  messages: getMessages(10),
  typing: "",
  contacts,
  activeUserId: null
};

export function generateUser() {
  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    profile_pic: faker.internet.avatar(),
    status: txtgen.sentence(),
    user_id: shortid.generate()
  };
}

function generateMsg(number) {
  return {
    number,
    text: txtgen.sentence(),
    is_user_msg: faker.random.boolean()
  };
}

function generateuser(numberOfuser) {
  return Array.from({ length: numberOfuser }, () => generateUser());
}

function generateMsgs(numberOfMsgs) {
  return Array.from({ length: numberOfMsgs }, (v, i) => generateMsg(i));
}