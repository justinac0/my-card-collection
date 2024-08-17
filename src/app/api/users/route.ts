import { getAllUsers, insertUser, removeUser, updateUser } from "@/app/lib/db/controller/users";
import handleAPICall, { APIHandler } from "@/app/lib/utils";

const GetHandler: APIHandler = async (req, res) => {
  const users = await getAllUsers() ?? [];

  return Response.json(users, {status: 200});
}

const PostHandler: APIHandler = async (req, res) => {
  const body = await req.json();
  const user = await insertUser(body);

  return Response.json(user, {status: 200});
}

const DeleteHandler: APIHandler = async (req, res) => {
  const body = await req.json();
  const result = await removeUser(body);
  if (result?.[0].affectedRows == 0) {
    return Response.json({message: 'No rows were affected on deletion.'}, {status: 200});
  }

  return Response.json({message: 'user was removed from database.'}, {status: 200});
}

const PatchHandler: APIHandler = async (req, res) => {
  const body = await req.json();
  const result = await updateUser(body);
  console.log(result);

  return Response.json({message: 'user has been updated.'}, {status: 200});
}

export const GET = handleAPICall(GetHandler);
export const POST = handleAPICall(PostHandler);
export const PATCH = handleAPICall(PatchHandler);
export const DELETE = handleAPICall(DeleteHandler);