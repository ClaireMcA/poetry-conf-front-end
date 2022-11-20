// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ObjectId } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";
import dbPromise from "../../../lib/mongo";

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   switch (req.method) {
//     case "GET":
//       return handleGet(req, res);
//     case "PUT":
//       return handlePut(req, res);
//   }
// }

// const handleGet =  (req: NextApiRequest, res: NextApiResponse) => {
//   dbPromise.then(db => db.collection("sessions")
//     .findOne({ _id: new ObjectId(req.query.id as string) })
//   )
//   .then((documents) => {
//     res.status(200).send(documents);
//   })
//   .catch((err) => {
//     res.status(500).send(err);
//   });
// };

// const handlePut = (req: NextApiRequest, res: NextApiResponse) => {
//   dbPromise.then(db => db.collection("sessions")
//     .updateOne(
//         { _id: new ObjectId(req.query.id as string) },
//         { $set: req.body }
//     )
//   )
//   .then((documents) => {
//     res.status(200).send(documents);
//   })
//   .catch((err) => {
//     res.status(500).send(err);
//   });
// };
