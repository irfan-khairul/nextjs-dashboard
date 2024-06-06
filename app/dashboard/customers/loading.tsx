import { TableRowSkeleton } from '@/app/ui/skeletons';
import React from 'react';
import {} from 'next/navigation';
import { lusitana } from '@/app/ui/fonts';

export default function Loading() {
  return (
    <div>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Customers
      </h1>
    </div>
  );
}
