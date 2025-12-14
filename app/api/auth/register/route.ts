import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { connectDB } from "@/lib/db";
import { User } from "@/models/User";

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "همه فیلدها الزامی است" },
        { status: 400 }
      );
    }

    await connectDB();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "این ایمیل قبلاً ثبت شده" },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return NextResponse.json(
      { message: "ثبت‌نام با موفقیت انجام شد" },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { message: "خطای سرور" },
      { status: 500 }
    );
  }
}
