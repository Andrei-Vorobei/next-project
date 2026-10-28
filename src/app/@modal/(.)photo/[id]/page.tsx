import { Suspense } from "react";
import { CARS } from "@/app/page";
import { CloseButton } from "./CloseButton";

interface PhotoModalProps {
  params: Promise<{
    id: string;
  }>;
}

export default function PhotoModal({ params }: PhotoModalProps) {
  return (
    <Suspense fallback={null}>
      <PhotoModalContent params={params} />
    </Suspense>
  );
}

async function PhotoModalContent({ params }: PhotoModalProps) {
  const { id } = await params;

  const car = CARS.find((c) => c.id === id);

  if (!car) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-4'>
      <div className='bg-zinc-950 p-12 rounded-4xl border border-zinc-800 max-w-lg w-full shadow-2xl'>
        <span className='text-blue-500 text-[10px] font-bold uppercase tracking-widest block mb-2'>
          Intercepted
        </span>

        <h2 className='text-5xl font-black text-white uppercase italic mb-6'>{car.name}</h2>

        <p className='text-zinc-500 mb-8'>
          Этот контент перехвачен. Вы видите его в модалке, но в адресной строке путь /photo/{id}.
        </p>
        <CloseButton />
      </div>
    </div>
  );
}
