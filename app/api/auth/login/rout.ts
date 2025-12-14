import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { connectDB } from "@/lib/db";
import { User } from "@/models/User";

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: "ایمیل و رمز عبور الزامی است" },
        { status: 400 }
      );
    }

    await connectDB();

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { message: "کاربر یافت نشد" },
        { status: 404 }
      );
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return NextResponse.json(
        { message: "رمز عبور اشتباه است" },
        { status: 401 }
      );
    }

    return NextResponse.json({
      message: "ورود موفق",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch {
    return NextResponse.json(
      { message: "خطای سرور" },
      { status: 500 }
    );
  }
}
