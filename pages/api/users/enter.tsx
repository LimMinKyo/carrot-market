import withHandler from "@/libs/server/withHandler";
import { NextApiHandler } from "next";

const handler: NextApiHandler = (req, res) => {
  res.status(200).end();
};

export default withHandler("POST", handler);
