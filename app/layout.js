import { Open_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/provider/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { ModalProvider } from "@/components/provider/modal-provider";
import { SocketProvider } from "@/components/provider/socket-provider";
import { QueryProvider } from "@/components/provider/query-provider";
const inter = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  manifest: "/manifest.json",
  title: "Discord Clone",
  description: "Discord Clone build by Thazin Phyoe Kyaw",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
          >
            <SocketProvider>
              <ModalProvider />
              <QueryProvider>{children}</QueryProvider>
            </SocketProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
