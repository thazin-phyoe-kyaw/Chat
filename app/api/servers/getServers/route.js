import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const profile = await currentProfile();
    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    const servers = await db.server.findMany({
      where: {
        profileId: profile.id,
      },
    });
    return NextResponse.json(servers);
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
