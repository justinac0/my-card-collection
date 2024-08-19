import handleAPICall, { APIHandler } from "@/app/lib/utils";

const PostHandler: APIHandler = async (req, res) => {
    const { email, password } = await req.json();

    console.log(email, ', ', password);

    return Response.json({error: 'Not Implemented'}, {status: 500});
}

export const POST = handleAPICall(PostHandler);
