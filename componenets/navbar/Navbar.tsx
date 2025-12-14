"use client";

import { useState } from "react";
import Image from "next/image";

interface NavbarProps {
  userEmail: string | null;
  onLoginClick: () => void;
  onLogout: () => void;
  onRegisterClick: () => void;
}

export default function Navbar({
  userEmail,
  onLoginClick,
  onLogout,
  onRegisterClick,
}: NavbarProps) {
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
