import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { route } from 'ziggy-js';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Short Term Stock Show',
        href: '/short_term_stock',
    },
];

export default function Edit({ short_term_stock }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Short Term Stock Show" />

            <div className="p-3">
                <Link
                    href={route('short_term_stocks.index')}
                    className="cursor-pointer rounded-lg bg-blue-700 px-3 py-2 text-xs font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none"
                >
                    Back
                </Link>

                <div>
                    <p>
                        <strong>Name: </strong>
                        {short_term_stocks.name}
                    </p>
                    <p>
                        <strong>Email: </strong>
                        {short_term_stocks.description}
                    </p>
                </div>
            </div>
        </AppLayout>
    );
}
