import prisma from "@/libs/server/prisma";
import withHandler from "@/libs/server/withHandler";
import { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
  const { phone, email } = req.body;
  const user = phone ? { phone: +phone } : { email };
  const payload = Math.floor(100000 + Math.random() * 900000) + "";
  const token = await prisma.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            ...user,
          },
          create: {
            name: "Anonymous",
            ...user,
          },
        },
      },
    },
  });
  console.log(token);

  res.status(200).end();
};

export default withHandler("POST", handler);
