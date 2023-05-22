/*these file just is used to lisent the port and creat a connections, all request of tipy app.get 
must be configurate in app.js

*/

const server = require("./app.js");
const { conn } = require("./db.js");

require("dotenv").config();

conn
	.sync({ force: false })
	.then(async () => {
		server.listen(process.env.PORT, () => {
			console.log(`Listening at: https://localhost:${process.env.PORT}/`);
		});
	})
	.catch((error) => console.log(error.message));
