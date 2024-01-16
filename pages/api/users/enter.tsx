import prisma from "@/libs/server/prisma";
import withHandler, { ResponseType } from "@/libs/server/withHandler";
import { NextApiHandler } from "next";

const handler: NextApiHandler<ResponseType> = async (req, res) => {
  const { phone, email } = req.body;
  const user = phone ? { phone: +phone } : email ? { email } : null;
  if (!user) return res.status(400).json({ ok: false });
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

  return res.json({
    ok: true,
  });
};

export default withHandler("POST", handler);
