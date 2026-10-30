"use client";

export default function WinkButton({ name }: { name: string }) {
  return (
    <button
      onClick={() => alert(`Вы помигнули ${name}`)}
      className='ml-2 px-4 py-2 bg-blue-500 text-white rounded-md'
    >
      Подмигнуть
    </button>
  );
}
