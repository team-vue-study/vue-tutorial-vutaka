const database = [
  {id: 1, name: '靴下', cost: 100, comment: '新品だけど臭い'},
  {id: 2, name: '足袋', cost: 10000, comment: 'メーカー希望小売価格が高い'},
  {id: 3, name: '五指ソックス', cost: 500, comment: 'なぜか指が六本'}
]

export default {
  fetch() {
    return database;
  },
  find(id) {
    return database.find(el => el.id === id);
  },
  asyncFind(id, callback) {
    setTimeout(() => {
      callback(database.find(el => el.id === id))
    }, 1000);
  }
}