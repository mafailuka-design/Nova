import './globals.css';

export const metadata = {
  title: 'NovaNest - Discover your nest in the nova of luxury living',
  description: 'Our exquisite properties blend timeless elegance with modern comfort, offering an oasis of serenity amidst the bustling world outside.',
  icons: {
    icon: '/images/logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-site-pattern min-h-screen text-[#F4FFFB] antialiased">
        {children}
      </body>
    </html>
  );
}
