const pool = require('../utils/pool');
module.exports = class CartoonCat {
  // TODO -- fill in this class!

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.type = row.type;
    this.url = row.url;
    this.year = row.year;
    this.lives = row.lives;
    this.isSidekick = row.is_sidekick;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * from cartoon_cats');
    return rows.map((cat) => new CartoonCat(cat));
  }

  static async getById(id) {
    const { rows } = await pool.query(
      'SELECT * from cartoon_cats where id = $1',
      [id]
    );
    return new CartoonCat(rows[0]);
  }
};
