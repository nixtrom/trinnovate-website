import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers";
import NavbarDemo from "./components/ResizeableNavbar";
import { Maven_Pro } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const mavenPro = Maven_Pro({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], 
  variable: '--font-maven-pro', 
  display: 'swap', 
})

export const metadata = {
  title: "Trinnovate",
  description: "Robotics Solution Provider",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${mavenPro.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <NavbarDemo />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
