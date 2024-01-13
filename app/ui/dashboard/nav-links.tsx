'use client';


import {
    UserGroupIcon,
    HomeIcon,
    DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from "next/link";
import {usePathname} from "next/navigation";
import clsx from "clsx";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
interface LinkType {
    name: string,
    href: string,
    icon: any
}

let linkObj1: LinkType = {
    name: 'Home', href: '/dashboard',
    icon: HomeIcon
}
let linkObj2: LinkType =
    {
        name: 'Invoices',
        href: '/dashboard/invoices',
        icon: DocumentDuplicateIcon
    }
let linkObj3: LinkType =
    {
        name: 'Customers', href: '/dashboard/customers',
        icon: UserGroupIcon
    }

const links: LinkType[] = [
    linkObj1,
    linkObj2,
    linkObj3
]

export default function NavLinks() {

    const pathName = usePathname()
    // console.log('path name is:', pathName)

    return (
        <>
            {links.map((linkE: LinkType) => {
                const LinkIcon = linkE.icon
                return (
                    <Link
                        key={linkE.name}
                        href={linkE.href}
                        className={clsx(
                            'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                            {
                                'bg-sky-100 text-pink-600': pathName === linkE.href,
                            },
                        )}
                    >
                        <LinkIcon className="w-6"/>
                        <p className="hidden md:block">{linkE.name}</p>
                    </Link>
                );
            })}
        </>
    );
}
