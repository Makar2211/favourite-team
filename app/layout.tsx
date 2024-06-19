import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.scss";

const roboto = Roboto({ weight: ['100', '400', "500", "700", '900'], subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Favourite Team",
	description: "Create u favourite team",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
			<body className={roboto.className}>{children}</body>
		</html>
	);
}
