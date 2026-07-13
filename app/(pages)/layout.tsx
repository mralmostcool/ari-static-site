import React from "react";
import { PageHeader } from '@/components';


export default function Layout({ children }: { children: React.ReactNode }) {
    return <div>
        <PageHeader />
        {children}
    </div>;
}