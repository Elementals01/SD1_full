const express = require("express");
const connectToMongo = require("./db");

const app = require("./app");
require("dotenv").config({ path: "./.env" });

connectToMongo()
	.then(() => {
		app.listen(process.env.PORT || 3000, () => {
			console.log(
				`⚙️ Server is running at port : ${process.env.PORT}`
			);
		});
	})
	.catch((err) => {
		console.log("DataBase connection failed !!! ", err);
	});

