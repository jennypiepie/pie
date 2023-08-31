'use client';

import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface TabItemProps{
    label: string;
    href: string;
    active: boolean;
}

const TabItem: React.FC<TabItemProps> = ({label,href,active}) => {
    return (
        <span key={label}
            className={twMerge(
                `mr-2
                 hover:text-green-400
                `,
                active && "text-green-400"
            )}>
            <Link href={href}>
                {label}
            </Link>
        </span>
    )
}

export default TabItem;