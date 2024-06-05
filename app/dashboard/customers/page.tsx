import CustomersTable from '@/app/ui/customers/table';
import { Metadata } from 'next';
import { fetchFilteredCustomers } from '@/app/lib/data';

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

  const customers = await fetchFilteredCustomers(query);

  if (!customers) return null;

  return <CustomersTable customers={customers}></CustomersTable>;
}

export const metadata: Metadata = {
  title: 'Customers',
};
