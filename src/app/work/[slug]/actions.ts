"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const COOKIE_NAME = "fm-global-unlocked";
const COOKIE_VALUE = "1";

export async function unlockFmGlobal(formData: FormData) {
  const password = formData.get("password");
  const expected = process.env.FM_GLOBAL_PASSWORD;

  if (!expected || typeof password !== "string" || password !== expected) {
    redirect("/work/fm-global?error=invalid");
  }

  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, COOKIE_VALUE, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });

  redirect("/work/fm-global");
}

export async function isFmGlobalUnlocked(): Promise<boolean> {
  const cookieStore = await cookies();
  return cookieStore.get(COOKIE_NAME)?.value === COOKIE_VALUE;
}
