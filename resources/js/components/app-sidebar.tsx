import { ChevronRight } from 'lucide-react';
import * as React from 'react';

import { SearchForm } from '@/components/search-form';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from '@/components/ui/sidebar';
import { VersionSwitcher } from '@/components/version-switcher';

const data = {
    versions: ['1.0.1', '1.1.0-alpha', '2.0.0-beta1'],
    navMain: [
        {
            title: 'Dashboard',
            url: '/dashboard',
            items: [],
        },
        {
            title: 'Admin Center',
            url: '#',
            items: [
                { title: 'Cateogries', url: '/categories' },
                { title: 'Instruments', url: '/instruments' },
                { title: 'Users', url: '/users' },
            ],
        },
        {
            title: 'Trade Admin',
            url: '#',
            items: [
                { title: 'Strategy', url: '/strategies' },
                { title: 'Trades', url: '/trades' },
                { title: 'Short Term Stocks', url: '/short_term_stocks' },
            ],
        },
        {
            title: 'Logout',
            url: '/logout',
            items: [],
            logout: true,
        },
    ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const pathname = window.location.pathname;

    const [openItem, setOpenItem] = React.useState<string | null>(null);

    const handleLogout = async () => {
        await fetch('/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': (
                    document.querySelector(
                        'meta[name="csrf-token"]',
                    ) as HTMLMetaElement
                )?.content,
            },
        });

        window.location.href = '/login';
    };

    return (
        <Sidebar {...props}>
            <SidebarHeader>
                <VersionSwitcher
                    versions={data.versions}
                    defaultVersion={data.versions[0]}
                />
                <SearchForm />
            </SidebarHeader>

            <SidebarContent className="gap-0">
                {data.navMain.map((item) => {
                    const isSingleActive = item.url === pathname;
                    const isParentActive =
                        item.items?.some((sub) => sub.url === pathname) ??
                        false;

                    // menu should auto-open if its child is active
                    const isOpen = openItem === item.title || isParentActive;

                    return item.items && item.items.length > 0 ? (
                        <Collapsible
                            key={item.title}
                            open={isOpen}
                            onOpenChange={(open) =>
                                setOpenItem(open ? item.title : null)
                            }
                            className="group/collapsible"
                        >
                            <SidebarGroup>
                                <SidebarGroupLabel
                                    asChild
                                    className={`group/label text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground ${isParentActive ? 'font-semibold text-sidebar-accent-foreground' : ''} `}
                                >
                                    <CollapsibleTrigger className="flex w-full items-center">
                                        {item.title}
                                        <ChevronRight className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-90" />
                                    </CollapsibleTrigger>
                                </SidebarGroupLabel>

                                <CollapsibleContent className="mt-1">
                                    <SidebarGroupContent>
                                        <SidebarMenu>
                                            {item.items.map((sub) => (
                                                <SidebarMenuItem
                                                    key={sub.title}
                                                >
                                                    <SidebarMenuButton
                                                        asChild
                                                        isActive={
                                                            sub.url === pathname
                                                        }
                                                    >
                                                        <a href={sub.url}>
                                                            {sub.title}
                                                        </a>
                                                    </SidebarMenuButton>
                                                </SidebarMenuItem>
                                            ))}
                                        </SidebarMenu>
                                    </SidebarGroupContent>
                                </CollapsibleContent>
                            </SidebarGroup>
                        </Collapsible>
                    ) : (
                        <SidebarGroup key={item.title}>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton
                                            asChild
                                            isActive={isSingleActive}
                                        >
                                            {item.logout ? (
                                                <a
                                                    href="#"
                                                    onClick={handleLogout}
                                                    className="cursor-pointer"
                                                >
                                                    {item.title}
                                                </a>
                                            ) : (
                                                <a href={item.url}>
                                                    {item.title}
                                                </a>
                                            )}
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                    );
                })}
            </SidebarContent>

            <SidebarRail />
        </Sidebar>
    );
}
