import { UsersList } from "@/components/users-list";
import { Suspense } from "react";

export default function UsersPage() {
  return (
    <div className='p-6 text-gray-700'>
      <h1 className='text-2xl font-bold mb-4'>Команда проекта</h1>
      <Suspense fallback={<p>Загрузка...</p>}>
        <UsersList />
      </Suspense>
    </div>
  );
}
