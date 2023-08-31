'use client';

import { usePathname } from 'next/navigation';
import { useMemo } from "react";
import TabItem from "./TabItem";

const Tabs = () => {
      
    const pathname = usePathname();
    const routes = useMemo(() => [
        {
            label: 'HOME',
            href: '/',
            active:pathname ==='/'
        },
        {
            label: 'ABOUT',
            href: '/about',
            active:pathname ==='/about'
        },
        {
            label: 'WORKS',
            href: '/works',
            active:pathname ==='/works'
        },
        {
            label: 'CONTACT',
            href: '/contact',
            active:pathname ==='/contact'
        }
    ],[pathname])
    
    return (
        <div className="absolute top-1 right-1">
            {routes.map(route => <TabItem key={route.label} {...route} />)}
        </div>
    )
}

export default Tabs;