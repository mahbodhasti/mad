"use client";

import { useState } from "react";

export default function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/auth/login", {
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
          ورود به Mahbod Hasti
        </h1>

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

        <button className="w-full bg-purple-600 p-3 rounded-xl">
          ورود
        </button>
      </form>
    </div>
  );
}
