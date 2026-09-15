import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'miABCTamil Promotion Studio',description:'Create, review and improve Tamil and English campaigns for miABCTamil.',icons:{icon:'/favicon.svg'}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
