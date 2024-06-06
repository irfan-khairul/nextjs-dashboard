import { lusitana } from '@/app/ui/fonts';
import { InvoicesTableSkeleton, SearchSkeleton } from '@/app/ui/skeletons';
import { PlusIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react';

export default function Loading() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
          Invoices
        </h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <SearchSkeleton />
        <Link
          aria-disabled
          href="#"
          className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors"
        >
          <span className="hidden md:block">Create Invoice</span>
          <PlusIcon className="h-5 md:ml-4" />
        </Link>
      </div>
      <InvoicesTableSkeleton />
    </div>
  );
}
