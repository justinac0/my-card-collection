import handleAPICall, { APIHandler } from "@/app/lib/utils";

const PostHandler: APIHandler = async (req, res) => {
    return Response.json({error: 'Not Implemented'}, {status: 500});
}

export const POST = handleAPICall(PostHandler);