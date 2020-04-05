const users = [
  { id: 1, name: "Yago Ernandes", email: "yago.700+contato@gmail.com" },
  { id: 2, name: "Teste", email: "testando@gmail.com" },
];

module.exports = {
  Query: {
    users: () => users,
    user: (id) => users[id],
  },
  Mutation: {
    createUser: (user) => {
      users.push(user);
      return user;
    },
  },
};
