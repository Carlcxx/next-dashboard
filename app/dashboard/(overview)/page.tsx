import {lusitana} from "@/app/ui/fonts";
import CardWrapper from "@/app/ui/dashboard/cards";
import RevenueChart from "@/app/ui/dashboard/revenue-chart";
import LatestInvoices from "@/app/ui/dashboard/latest-invoices";
import {CardsSkeleton, LatestInvoicesSkeleton, RevenueChartSkeleton} from "@/app/ui/skeletons";
import {Suspense} from 'react';

export default async function Page() {
    // const revenue = await fetchRevenue()
    // console.log('revenue are:', revenue)
    // const latestInvoices = await fetchLatestInvoices()
    // destruction first while fetching data back...
    // const {
    //     totalPaidInvoices, totalPendingInvoices,
    //     numberOfInvoices, numberOfCustomers
    // } = await fetchCardData()
    // const cardInfo = await fetchCardData()
    //
    // const {totalPaidInvoices} = cardInfo
    // const {totalPendingInvoices} = cardInfo
    // const {numberOfInvoices} = cardInfo
    // const {numberOfCustomers} = cardInfo


    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Dashboard
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Suspense fallback={<CardsSkeleton/>}>
                    <CardWrapper/>
                </Suspense>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                <Suspense fallback={<RevenueChartSkeleton/>}>
                    <RevenueChart/>
                </Suspense>
                <Suspense fallback={<LatestInvoicesSkeleton/>}>
                    <LatestInvoices/>
                </Suspense>
            </div>
        </main>
    )
}