// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import { ObjectId } from "mongodb";
// import type { NextApiRequest, NextApiResponse } from "next";
// import { getToken } from "next-auth/jwt";
// import { getSession, useSession } from "next-auth/react";
// import dbPromise from "../../../lib/mongo";

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   switch (req.method) {
//     case "POST":
//       return handlePost(req, res);
//   }
// }

// const handlePost = async (req: NextApiRequest, res: NextApiResponse) => {
//     const session = await getSession();
//     const token = await getToken({ req, raw: true})
//     console.log(session);
//     console.log(token);
//     if (!session?.user?.email) {
//         res.status(401).send("Must be logged in and have an email");
//         return;
//     }

//     const register = req.body.register;

//     dbPromise.then(db => db.collection("papers")
//         .updateOne(
//             { _id: new ObjectId(req.query.id as string) },
//             register ?
//             { $push: { 'registeredEmails': session.user?.email }} :
//             { $pull: { 'registeredEmails': session.user?.email }}
//         )
//     )
//     .then((documents) => {
//         res.status(200).send(documents);
//     })
//     .catch((err) => {
//         res.status(500).send(err);
//     });
// };
