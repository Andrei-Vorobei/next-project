interface UserPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function UserPage({ params }: UserPageProps) {
  const { id } = await params;

  return (
    <div className='p-4 bg-zinc-50 border-2 border-zinc-500 rounded-md'>
      <h1 className='text-xl font-bold text-black'>Контент пользователя {id}</h1>
      <p className='text-mt-2 text-zinc-600'>
        Эта страница находится по пути <code>/dashboard/users/{id}</code>
      </p>
    </div>
  );
}
