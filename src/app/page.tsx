'use client';

import { useRouter } from 'next/navigation';
import Button from './components/button';

export default function Home() {
  const router = useRouter();

  return (
    <main className="p-6 max-w-sm mx-auto mt-12 bg-white rounded-xl shadow-lg flex flex-col gap-10 items-center space-x-4">
      <h1 className="flex-1 text-3xl font-semibold text-gray-900">CRM</h1>
      <Button onClick={() => router.push('/dashboard')}>Go to dashboard</Button>
    </main>
  );
}
