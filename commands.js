export const commands = [
  {
    name: "queue",
    description: "check if a level is in the verifier queue",
    options: [
      {
        name: "level_url",
        description: "level url",
        type: 3,
        required: true
      }
    ],
    integration_types: [0, 1],
    contexts: [0, 1, 2]
  },

  {
    name: "publish_time",
    description: "view the publish time for a level",
    options: [
      {
        name: "level_url",
        description: "level url",
        type: 3,
        required: true
      }
    ],
    integration_types: [0, 1],
    contexts: [0, 1, 2]
  },

  {
    name: "leaderboard_search",
    description: "search for a user's record",
    options: [
      {
        name: "username",
        description: "user name",
        type: 3,
        required: true
      },
      {
        name: "level_url",
        description: "level url",
        type: 3,
        required: true
      }
    ],
    integration_types: [0, 1],
    contexts: [0, 1, 2]
  },

  {
    name: "leaderboard_record",
    description: "view a user's record with extra stats",
    options: [
      {
        name: "username",
        description: "user name",
        type: 3,
        required: true
      },
      {
        name: "level_url",
        description: "level url",
        type: 3,
        required: true
      }
    ],
    integration_types: [0, 1],
    contexts: [0, 1, 2]
  },

  {
    name: "is_banned",
    description: "check if someone is banned",
    options: [
      {
        name: "username",
        description: "user name",
        type: 3,
        required: false
      },
      {
        name: "user_id",
        description: "user id",
        type: 3,
        required: false
      }
    ],
    integration_types: [0, 1],
    contexts: [0, 1, 2]
  },

  {
    name: "was_verified",
    description: "view the verification date on a level",
    options: [
      {
        name: "level_url",
        description: "level url",
        type: 3,
        required: true
      }
    ],
    integration_types: [0, 1],
    contexts: [0, 1, 2]
  }
];
