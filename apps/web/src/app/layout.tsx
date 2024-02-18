import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { meta } from "@/config";
import { ColorSchemeScript, UIProvider } from "@repo/ui";
import { AppLayout } from "@/components/template/AppLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  description: meta.description,
  title: {
    default: meta.title.default,
    template: `%s ${meta.title.separator} ${meta.title.default}`,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="ja">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <UIProvider>
          <AppLayout>
            {children}
          </AppLayout>
        </UIProvider>
        </body>
    </html>
  );
}
