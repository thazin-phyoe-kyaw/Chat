import { currentProfile } from "@/lib/current-profile";
import { NextResponse } from "next/server";

import { db } from "@/lib/db";

export async function PATCH(req, { params }) {
  console.log(params, "PARAMS");
  try {
    const profile = await currentProfile();
    const { name, imageUrl } = await req.json();

    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const server = await db.server.update({
      where: {
        id: params.serverId,
        profileId: profile.id,
      },
      data: {
        name,
        imageUrl,
      },
    });

    return NextResponse.json(server);
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
