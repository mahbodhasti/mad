"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from '../components/navbar/Navbar';
import Banner from '../components/banner/Banner';


export default function HomePage() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState<string | null>(null);

  const handleLoginClick = () => router.push("/login");
  const handleRegisterClick = () => router.push("/register");
  const handleLogout = () => {
    setUserEmail(null);
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar
        userEmail={userEmail}
        onLoginClick={handleLoginClick}
        onRegisterClick={handleRegisterClick}
        onLogout={handleLogout}
      />

      <main className="flex flex-col items-center justify-start min-h-[calc(100vh-72px)] p-4 gap-6">
        <h1 className="text-4xl font-bold text-center mt-6">
          به Mahbod Hasti خوش آمدید
        </h1>

        <div className="w-full max-w-5xl">
          <Banner height="h-48" />
        </div>

        <p className="text-center text-gray-300 max-w-2xl">
          اینجا می‌توانید مطالب جذاب، اخبار و اطلاعات مورد علاقه خود را پیدا کنید.
        </p>
      </main>
    </div>
  );
}
