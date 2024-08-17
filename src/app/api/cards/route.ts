import handleAPICall, { APIHandler } from "@/app/lib/utils";

const GetHandler: APIHandler = async (req, res) => {
  return Response.json({error: 'Not implemented!'}, {status: 500});
}

const PostHandler: APIHandler = async (req, res) => {
  return Response.json({error: 'Not implemented!'}, {status: 500});
}

const DeleteHandler: APIHandler = async (req, res) => {
  return Response.json({error: 'Not implemented!'}, {status: 500});
}

const PatchHandler: APIHandler = async (req, res) => {
  return Response.json({error: 'Not implemented!'}, {status: 500});
}

export const GET = handleAPICall(GetHandler);
export const POST = handleAPICall(PostHandler);
export const PATCH = handleAPICall(PatchHandler);
export const DELETE = handleAPICall(DeleteHandler);