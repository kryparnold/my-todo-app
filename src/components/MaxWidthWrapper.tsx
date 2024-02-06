import React from "react";

interface MaxWidthWrapperProps {
    children: React.ReactNode
}

export default function MaxWidthWrapper({ children }: MaxWidthWrapperProps) {
    return (
        <div className="w-3/5 flex justify-center flex-col">
            {children}
        </div>
    );
}
