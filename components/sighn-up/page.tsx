"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    alert(data.message);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <form
        onSubmit={submitHandler}
        className="w-full max-w-md bg-zinc-900 p-8 rounded-2xl space-y-4"
      >
        <h1 className="text-2xl font-bold text-center">
          ثبت‌نام در Mahbod Hasti
        </h1>

        <input
          placeholder="نام"
          className="w-full p-3 rounded bg-zinc-800"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="ایمیل"
          className="w-full p-3 rounded bg-zinc-800"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="رمز عبور"
          className="w-full p-3 rounded bg-zinc-800"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="w-full bg-green-600 p-3 rounded-xl">
          ثبت‌نام
        </button>
      </form>
    </div>
  );
}
