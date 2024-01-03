import prisma from "@/libs/server/prisma";
import withHandler from "@/libs/server/withHandler";
import { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
  const { phone, email } = req.body;
  const payload = phone ? { phone: +phone } : { email };
  const user = await prisma.user.upsert({
    where: {
      ...payload,
    },
    create: {
      name: "Anonymous",
      ...payload,
    },
    update: {},
  });

  res.status(200).end();
};

export default withHandler("POST", handler);
