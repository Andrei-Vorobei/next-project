import { db } from "@/lib/db";
import WinkButton from "@/components/wink-button";

export async function UsersList() {
  const users = await db.query.users.findMany();

  return (
    <ul className='space-y-2'>
      {users.map((user) => (
        <li key={user.id} className='border-b pb-2'>
          <span className='font-medium'>{user.email}</span>
          <WinkButton name={user.email} />
        </li>
      ))}
    </ul>
  );
}
