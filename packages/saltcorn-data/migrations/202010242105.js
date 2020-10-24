const sql =
  "alter table _sc_tables add column uuid_ids boolean not null default false";

module.exports = { sql };
