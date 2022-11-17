import { Db, MongoClient } from "mongodb";

const mongoUri = process.env.MONGODB_URI || "";
export var db: Db;

export const initDb = async () => {
  return MongoClient.connect(mongoUri).then((client) => {
    db = client.db("poetry-conf");
  });
};
