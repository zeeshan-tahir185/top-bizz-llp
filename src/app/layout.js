import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";

export const metadata = {
  title: "Top Biz LLP",
  description:
    "Reach out to Top Biz LLP for expert General Order Supplies, Import-Export solutions, and Government. Get in touch today for tailored, high-quality business support in Rawalpindi, Pakistan.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Source+Sans+Pro:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css"
        ></link>
        
      </head>
      <body className={`antialiased`}>
        {children}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
      </body>
    </html>
  );
}
