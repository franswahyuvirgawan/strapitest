const { DATABASE_CLIENT, DATABASE_URL, DATABASE_HOST, DATABASE_PORT, DATABASE_USER, DATABASE_NAME, DATABASE_PASSWORD } = process.env

module.exports = () => ({
  connection: {
    client: DATABASE_CLIENT,
    connection: {
      host: DATABASE_HOST,
      port: DATABASE_PORT,
      database: DATABASE_NAME,
      user: DATABASE_USER,
      password: DATABASE_PASSWORD,
      ssl: {
        rejectUnauthorized: false,
      },
    },
    debug: false,
  },
});



































^G Help          ^O Write Out     ^W Where Is      ^K Cut           ^T Execute       ^C Location      M-U Undo         M-A Set Mark     M-] To Bracket   M-Q Previous     ^B Back          ^◂ Prev Word
^X Exit          ^R Read File     ^\ Replace       ^U Paste         ^J Justify       ^/ Go To Line    M-E Redo         M-6 Copy         ^Q Where Was     M-W Next         ^F Forward       ^▸ Next Word
