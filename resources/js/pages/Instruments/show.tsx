import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { route } from 'ziggy-js';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Instrument Show',
        href: '/instruments',
    },
];

export default function Edit({ instrument }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Instrument Show" />

            <div className="p-3">
                <Link
                    href={route('instruments.index')}
                    className="cursor-pointer rounded-lg bg-blue-700 px-3 py-2 text-xs font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none"
                >
                    Back
                </Link>

                <div>
                    <p>
                        <strong>Name: </strong>
                        {instrument.name}
                    </p>
                    <p>
                        <strong>Email: </strong>
                        {instrument.description}
                    </p>
                </div>
            </div>
        </AppLayout>
    );
}
