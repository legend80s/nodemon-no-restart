const app = require('../app');

const port = 6008;
const server = app.listen(port, () => {
  console.log(`Server listening on port ${server.address().port}`);
});
