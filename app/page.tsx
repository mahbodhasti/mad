"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Banner from "@/componenets/banner/Banner";


// ------------------ Navbar ------------------
interface NavbarProps {
  userEmail: string | null;
  onLoginClick: () => void;
  onLogout: () => void;
  onRegisterClick: () => void;
}

function Navbar({ userEmail, onLoginClick, onLogout, onRegisterClick }: NavbarProps) {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-purple-700 via-blue-600 to-orange-500 shadow-md flex justify-between items-center px-6 py-3">
      {/* لوگو */}
      <div className="flex items-center gap-2">
        <Image
          src="https://res.cloudinary.com/dhff7ulyr/image/upload/v1756405118/mahbodlg_qljvds.png"
          alt="Logo"
          width={50}
          height={50}
          priority
        />
        <span className="text-white font-bold text-xl">Mahbod Hasti</span>
      </div>

      {/* لینک‌ها */}
      <ul className="flex items-center gap-4">
        <li>
          <button className="text-white hover:bg-white/20 px-3 py-1 rounded">خانه</button>
        </li>
        <li>
          <button className="text-white hover:bg-white/20 px-3 py-1 rounded">درباره ما</button>
        </li>
        <li>
          <button className="text-white hover:bg-white/20 px-3 py-1 rounded">تماس با ما</button>
        </li>

        {!userEmail ? (
          <>
            <li>
              <button
                onClick={onLoginClick}
                className="bg-purple-600 hover:bg-purple-700 px-3 py-1 rounded font-semibold text-white"
              >
                ورود
              </button>
            </li>
            <li>
              <button
                onClick={onRegisterClick}
                className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded font-semibold text-white"
              >
                ثبت‌نام
              </button>
            </li>
          </>
        ) : (
          <li className="relative">
            <button
              onClick={() => setOpenDropdown(prev => !prev)}
              className="text-white hover:bg-white/20 px-3 py-1 rounded font-semibold"
            >
              {userEmail}
            </button>

            {openDropdown && (
              <div className="absolute right-0 mt-2 w-32 bg-zinc-900 rounded shadow-lg flex flex-col p-2">
                <button
                  onClick={onLogout}
                  className="text-white hover:bg-red-600 px-3 py-1 rounded"
                >
                  خروج
                </button>
              </div>
            )}
          </li>
        )}
      </ul>
    </nav>
  );
}

// ------------------ HomePage ------------------
export default function HomePage() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState<string | null>(null);

  const handleLoginClick = () => router.push("/login");
  const handleRegisterClick = () => router.push("/register");
  const handleLogout = () => {
    setUserEmail(null);
    router.push("/"); // یا هر صفحه‌ای که بعد از خروج میخوای
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <Navbar
        userEmail={userEmail}
        onLoginClick={handleLoginClick}
        onRegisterClick={handleRegisterClick}
        onLogout={handleLogout}
      />

      {/* Main content */}
      <main className="flex flex-col items-center justify-start min-h-[calc(100vh-72px)] p-4 gap-6">
        <h1 className="text-4xl font-bold text-center mt-6">
          به Mahbod Hasti خوش آمدید
        </h1>

        {/* Banner کوچک */}
        <div className="w-full max-w-5xl">
          <Banner height="h-48" />
        </div>

        {/* توضیح کوتاه */}
        <p className="text-center text-gray-300 max-w-2xl">
          اینجا می‌توانید مطالب جذاب، اخبار و اطلاعات مورد علاقه خود را پیدا کنید.
        </p>
      </main>
    </div>
  );
}
