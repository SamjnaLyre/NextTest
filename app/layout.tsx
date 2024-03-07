import '@/app/ui/global.css';
import { comfortaa } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${comfortaa.className} antialiased`}>{children}</body>
    </html>
  );
}
