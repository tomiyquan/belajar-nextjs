import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import Link from 'next/link';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode, Key } from 'react';

async function getData() {
  const res = await fetch('http://localhost:8000/api/posts')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
 
 
export default async function Page() {
  const posts = await getData()
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>

      <div className="container" style={{ marginTop: '80px' }}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card border-0 shadow-sm rounded-3">
                            <div className="card-body">
                                <Link href="/posts/create">
                                    <button className="btn btn-primary border-0 shadow-sm mb-3">TAMBAH</button>
                                </Link>
                                <table className="table table-bordered mb-0">
                                    <thead>
                                        <tr>
                                            <th scope="col">NO</th>
                                            <th scope="col">IMAGE</th>
                                            <th scope="col">JUDUL</th>
                                            <th scope="col">CONTENT</th>
                                            <th scope="col">AKSI</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    { posts.data.data.map((item: { id: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; image: string | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; content: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; },index: Key | null | undefined) => (
                                        <tr key={index}>
                                          <td>{item.id}</td>
                                            <td className="text-center">
                                                <img src={item.image} width="150" className="rounded-3"/>
                                            </td>
                                            <td>{ item.title }</td>
                                            <td>{ item.content }</td>
                                            <td className="text-center">
                                                <button className="btn btn-sm btn-primary border-0 shadow-sm mb-3 me-3">EDIT</button>
                                                <button className="btn btn-sm btn-danger border-0 shadow-sm mb-3">DELETE</button>
                                            </td>
                                        </tr>
                                    )) }
                                    </tbody>
                                </table>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* <Card title="Collected" value={totalPaidInvoices} type="collected" /> */}
        {/* <Card title="Pending" value={totalPendingInvoices} type="pending" /> */}
        {/* <Card title="Total Invoices" value={numberOfInvoices} type="invoices" /> */}
        {/* <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        /> */}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        {/* <RevenueChart revenue={revenue}  /> */}
        {/* <LatestInvoices latestInvoices={latestInvoices} /> */}
      </div>
    </main>
  );
}