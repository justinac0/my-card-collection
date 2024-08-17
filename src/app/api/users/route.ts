import { getAllUsers, insertUser, removeUser, updateUser } from "@/app/lib/db/controller/users";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  res: NextResponse
) => {
  let users;

  try {
    users = await getAllUsers() ?? [];
  } catch (error: any) {
    return Response.json({error: error.toString()}, {status: 500});
  }

  return Response.json(users, {status: 200});
}

export const POST = async (
  req: NextRequest,
  res: NextResponse
) => {
  let user;
  try {
    const body = await req.json();
    user = await insertUser(body);
  } catch (error: any) {
    return Response.json({error: error.toString()}, {status: 500});
  }

  return Response.json(user, {status: 200});
}

export const DELETE = async (
  req: NextRequest,
  res: NextResponse
) => {
  try {
    const body = await req.json();
    const result = await removeUser(body);
    if (result?.[0].affectedRows == 0) {
      return Response.json({message: 'No rows were affected on deletion.'}, {status: 200});
    }
  } catch (error: any) {
    return Response.json({error: error.toString()}, {status: 500});
  }

  return Response.json({message: 'user was removed from database.'}, {status: 200});
}

export const PATCH = async (
  req: NextRequest,
  res: NextResponse
) => {
  try {
    const body = await req.json();
    await updateUser(body);
  } catch (error: any) {
    return Response.json({error: error.toString()}, {status: 500});
  }
  return Response.json({message: 'user has been updated.'}, {status: 200});
}