import Table from '@/app/ui/customers/table';
import { Metadata } from 'next';
import { fetchCustomerPages, fetchFilteredCustomers } from '@/app/lib/data';
import Pagination from '@/app/ui/invoices/pagination';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await fetchCustomerPages();
  const customers = await fetchFilteredCustomers(query, currentPage);

  if (!customers) return null;

  return (
    <div className="w-full">
      <Table customers={customers}></Table>;
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Customers',
};
