import CustomersTable from '@/app/ui/customers/table';
import { lusitana } from '@/app/ui/fonts';
import { Metadata } from 'next';
import { fetchAllCustomer } from '@/app/lib/data';

export default async function Page() {
  const customers = await fetchAllCustomer();

  if (!customers) return null;

  return <CustomersTable customers={customers}></CustomersTable>;
}

export const metadata: Metadata = {
  title: 'Customers',
};
