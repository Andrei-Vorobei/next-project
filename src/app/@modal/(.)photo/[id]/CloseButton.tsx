"use client";

import { useRouter } from "next/navigation";

export function CloseButton() {
  const router = useRouter();

  return (
    <button className='text-white text-2xl font-bold' onClick={() => router.back()}>
      &times;
    </button>
  );
}
