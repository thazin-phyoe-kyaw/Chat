import { Open_Sans } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/provider/theme-provider"

const inter = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Discord Clone',
  description: 'Discord Clone build by Thazin Phyoe Kyaw',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
         attribute="class"
            defaultTheme="dark"
            enableSystem={false}
          
      >
              
        {children}
        </ThemeProvider>
        </body>
    </html>
  )
}
