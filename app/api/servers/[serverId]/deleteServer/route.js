import { currentProfile } from "@/lib/current-profile";
import { NextResponse } from "next/server";

import { db } from "@/lib/db";
export async function DELETE(req, { params }) {
  console.log(req);
  try {
    const profile = await currentProfile();

    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const server = await db.server.delete({
      where: {
        id: params.serverId,
        profileId: profile.id,
      },
    });

    return NextResponse.json(server);
  } catch (error) {
    return new NextResponse("Internal  Server Error", { status: 500 });
  }
}
