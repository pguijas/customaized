import React, { Suspense } from "react";
// Ensure that Footer component exists at this path
import Footer from "../components/Footer";

import "./globals.css";
import { Metadata } from "next";
import NavBar from "../components/NavBar";

export const metadata: Metadata = {
  title: "CustomAIzed",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <section>
          <Suspense
            fallback={
              <div className="flex w-full px-4 lg:px-40 py-4 items-center border-b text-center gap-8 justify-between h-[69px]" />
            }
          >
            <NavBar />
          </Suspense>
        </section>
        <main className="flex flex-1 flex-col items-center py-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
