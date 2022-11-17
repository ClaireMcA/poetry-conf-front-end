// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Panel } from "../../../lib/types";
import { db } from "../../../lib/mongo";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      return handleGet(req, res);
    case "POST":
      return handlePost(req, res);
  }
}

const handleGet = (req: NextApiRequest, res: NextApiResponse) => {
  db.collection("panels")
    .find({})
    .toArray()
    .then((documents) => {
      res.status(200).json(documents);
    })
    .catch((err: Error) => {
      res.status(500).send(err);
    });
};

const handlePost = (req: NextApiRequest, res: NextApiResponse) => {
  db.collection("panels")
    .insertOne(req.body)
    .then(({ insertedId }) => {
      res.status(200).send(insertedId);
    })
    .catch((err: Error) => {
      res.status(500).send(err);
    });
};
