import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { route } from 'ziggy-js';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Category Show',
        href: '/categories',
    },
];

export default function Edit({ category }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Category Show" />

            <div className="p-3">
                <Link
                    href={route('categories.index')}
                    className="cursor-pointer rounded-lg bg-blue-700 px-3 py-2 text-xs font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none"
                >
                    Back
                </Link>

                <div>
                    <p>
                        <strong>Name: </strong>
                        {category.name}
                    </p>
                    <p>
                        <strong>Email: </strong>
                        {category.description}
                    </p>
                </div>
            </div>
        </AppLayout>
    );
}
