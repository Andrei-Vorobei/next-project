"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function Sidebar() {
  const [text, setText] = useState("");
  const router = useRouter();

  return (
    <aside className='w-64 bg-blue-50 p-6 border-r border-blur-100 flex flex-col'>
      <div className='mb-8 text-xs font-bold text-blue-500 uppercase tracking-widest font-sans'>
        Dashboard Layout
      </div>

      <nav className='flex flex-col gap-4'>
        <span className='font-bold text-sm text-zinc-400'>Навигация</span>

        <Link
          href='/dashboard'
          className='text-black text-extrabold hover:text-blue-600 transition-colors'
        >
          Главная
        </Link>
        <Link
          href='/dashboard/settings'
          className='text-black text-extrabold hover:text-blue-600 transition-colors'
        >
          Настройки
        </Link>
        <button
          onClick={() => router.push("/")}
          className='text-black text-extrabold hover:text-red-600 transition-colors'
        >
          Выйти
        </button>
      </nav>

      <div className='mt-auto pt-6 border-t border-blur-200'>
        <label className='block text-[10px] font-bold text-blue-400 uppercase mb-2'>
          Persistent State (Layout)
        </label>
        <input
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
          className='w-full p-2 text-sm border border-blue-200 rounded bg-white text-black focus:ring-2 focus:ring-blue-500 outline-none'
        />
      </div>
    </aside>
  );
}
