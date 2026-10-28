import { Suspense } from "react";
import { CARS } from "@/app/page";
import { notFound } from "next/navigation";

interface PhotoPageProps {
  params: Promise<{
    id: string;
  }>;
}

async function PhotoId({ params }: PhotoPageProps) {
  const { id } = await params;
  const car = CARS.find((c) => c.id === id);

  if (!car) return notFound();

  return (
    <main className='flex min-h-screen flex-col items-center justify-center bg-white text-black'>
      <h1 className='text-5xl font-black uppercase italic'>{car.name}</h1>
      <p className='mt-4 text-zinc-500'>Вы смотрите машину ID: {car.id}</p>
    </main>
  );
}

export default function PhotoPage({ params }: PhotoPageProps) {
  return (
    <Suspense fallback={<p className='mt-4 text-zinc-500'>Загрузка...</p>}>
      <PhotoId params={params} />
    </Suspense>
  );
}
