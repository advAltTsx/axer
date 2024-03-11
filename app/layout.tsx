import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import local from 'next/font/local';
 

const inter = Inter({ subsets: ["latin"] });

const nothing = local({
  src: [
    {
      path: '../public/fonts/nothing.ttf',
      weight: '600',
    },
  ],
  variable: '--font-nothing',
});

export const metadata: Metadata = {
  title: "Deployments Terminated",
  description: "Abandoning the domain.",
  icons: {
    icon: '/logo.jpg'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nothing.variable}>
        <div vaul-drawer-wrapper="" className="bg-white min-h-[100vh]">
          {children}
        </div>
      </body>
    </html>
  );
}
