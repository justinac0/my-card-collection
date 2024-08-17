import { NextRequest, NextResponse } from "next/server";

export type APIHandler = (
    req: NextRequest,
    res: NextResponse
) => Promise<Response>;

export default function handleAPICall(
    handler: APIHandler
): APIHandler {
    return async (req, res) => {
        try {
            return await handler(req, res);
        } catch (error: any) {
            return Response.json({error: error.toString()}, {status: 500});
        }
    }
}