import type { Metadata } from "next";
import { roboto, montserrat, nunito } from "@/app/fonts";
import "./globals.css";
import { ConfigProvider, theme } from "antd";

export const metadata: Metadata = {
  title: "Verdant | Next-Gen Financial Management System",
  description: "AI-driven wealth management wrapped in emerald elegance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`
        ${roboto.variable}
        ${montserrat.variable}
        ${nunito.variable}
      `}
    >
      <body className="font-sans">
        <ConfigProvider
          theme={{
            algorithm: theme.darkAlgorithm,
            token: {
              colorPrimary: "#ccff00",
              colorBgBase: "#06150d",
              colorTextBase: "#f3f4f6",
              borderRadius: 12,
            },
          }}
        >
          {children}
        </ConfigProvider>
      </body>
    </html>
  );
}