import { Redis } from "@upstash/redis/nodejs";
import { NextResponse } from "next/server";


const redis = Redis.fromEnv()

export async function GET() {
    try {
        const lpseData = await redis.get('lpse');
        const response = {
            status: "success",
            data: lpseData
        }
        return NextResponse.json(response)
    } catch (error) {
        NextResponse.json({ success: false, error: error }, {status: 500})
    }
}