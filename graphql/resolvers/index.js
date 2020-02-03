module.exports = {
  Query: {
    me: () => users[0],
  },
}

// In actual example, this data would be fetched from a database.
const users = [
  {
    id: 1,
    name: 'William',
    car: {
      id: 123,
      plateNumber: '1231234',
    },
  },
]
