import { lusitana } from '@/app/ui/fonts';
import { CustomerTableSkeleton, SearchSkeleton } from '@/app/ui/skeletons';

export default function Loading() {
  return (
    <div className="w-full">
      <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
        Customers
      </h1>
      <div className="mt-4 md:mt-12">
        <SearchSkeleton />
      </div>
      <CustomerTableSkeleton />
    </div>
  );
}
