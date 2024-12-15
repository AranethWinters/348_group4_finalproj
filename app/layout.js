import localFont from "next/font/local";
import "./globals.css";
import { AuthProvider } from "./lib/firebase/AuthContext";
import Header from "./components/header/page";
import Footer from "./components/footer/page";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Game Studio",
  description: "A website for a game studio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="relative min-h-screen">
          <div className='pb-[10rem]'>
            <Header/>
            {children}
            <Footer/>
            </div>
          </div>
      </body>
      </AuthProvider>
    </html>
  );
}
