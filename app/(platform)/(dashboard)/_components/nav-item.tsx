"use client"

import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link";
import { CircleUserRound, Eye, Heart, PanelsTopLeft, Settings } from 'lucide-react';

export type Organization = {
    id: string
    slug: String
    imageUrl: string
    name: string
}

interface NavItemProps {
    isExpanded: boolean
    isActive: boolean
    organization: any
    onExpand: (id: string) => void
}

export const NavItem = ({
    isExpanded,
    isActive,
    organization,
    onExpand
}: NavItemProps) => {
    return (
        <AccordionItem
            value={organization.id}
            className="border-none"
        >
            <AccordionTrigger
                onClick={() => onExpand(organization.id)}
                className={cn("flex items-center gap-x-2 p-1.5 text-neutral-700 rounded-md hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline",
                    isActive && !isExpanded && "bg-sky-500/10 text-sky-700"
                )}
            >
                <div className="flex items-center gap-x-2">
                    <div className="w-7 h-7 relative">
                        <Image
                            fill
                            src={organization.imageUrl}
                            alt="Organization"
                            className="rounded-sm object-cover"
                        />
                    </div>
                    <span className="font-medium text-sm">
                        {organization.name}
                    </span>
                </div>
            </AccordionTrigger>
            <AccordionContent>
                <ul>
                    <li>
                        <Link className="flex ml-10 mt-2 rounded-md hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline " href="/">
                        <PanelsTopLeft className="rounded-sm object-cover " />
                        <span className="ml-4 mt-1"> Boards </span>
                        </Link>
                    </li>
                    <li>
                        <Link className="flex ml-10 mt-2 rounded-md hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline " href="/">
                        <Heart className="rounded-sm object-cover " />
                        <span className="ml-4 mt-1"> Highlights </span>
                        </Link>
                    </li>
                    <li>
                        <Link className="flex ml-10 mt-2 rounded-md hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline " href="/">
                        <Eye className="rounded-sm object-cover " />
                        <span className="ml-4 mt-1"> Views </span>
                        </Link>
                    </li>
                    <li>
                        <Link className="flex ml-10 mt-2 rounded-md hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline " href="/">
                        <CircleUserRound className="rounded-sm object-cover " />
                        <span className="ml-4 mt-1"> Members </span>
                        </Link>
                    </li>
                    <li>
                        <Link className="flex ml-10 mt-2 rounded-md hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline " href="/">
                        <Settings className="rounded-sm object-cover " />
                        <span className="ml-4 mt-1"> Settings </span>
                        </Link>
                    </li>
                </ul>

            </AccordionContent>
        </AccordionItem>
    )
}