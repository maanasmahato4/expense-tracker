import mongoose from "mongoose";

declare global {
  var mongoose: {
    conn: any;
  };
}

global.mongoose = {
  conn: null,
};

export default async function dbConn() {
  try {
    if (global.mongoose.conn) {
      console.log("connection already established with the database");
      return global.mongoose.conn;
    } else {
      const mongoUrl = process.env.MONGO_URL as string;
      const connection = await mongoose.connect(mongoUrl);
      global.mongoose = {
        conn: connection,
      };
      console.log("database connection established");
      return connection;
    }
  } catch (error) {
    console.error(error);
  }
}
