import NavBarApp from "@/components/NavBarApp";
import Footer from "@/components/Footer";
import React, { Suspense, useState } from 'react';

export default function DashboardLayout({
    children, 
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
        <section>
        <Suspense
          fallback={
            <div className="flex w-full px-4 lg:px-40 py-4 items-center border-b text-center gap-8 justify-between h-[69px]" />
          }
        >
          <NavBarApp />
        </Suspense>
      </section>
      {children}

      </>


    )
  }