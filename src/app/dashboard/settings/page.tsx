import { notFound } from "next/navigation";

export default function SettingsPage() {
  const data = null;

  // if (!data) {
  //   notFound();
  // }

  return (
    <div className='p-4 bg-zinc-50 border-2 border-zinc-500 rounded-md'>
      <h1 className='text-xl font-bold text-black'>Контент профиля</h1>
      <p className='text-mt-2 text-zinc-600'>
        Эта страница находится по пути <code>/dashboard/settings</code>
      </p>
    </div>
  );
}
