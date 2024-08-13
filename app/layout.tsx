import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <header>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <ul>
              <li>
                <Link href="/" passHref>
                  <button>Home</button>
                </Link>
              </li>
              <li>
                <Link href="/dashboard" passHref>
                  <button>Dashboard</button>
                </Link>
              </li>
            </ul>
          </header>
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
