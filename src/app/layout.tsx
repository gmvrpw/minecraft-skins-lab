export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' type='image/png' href='favicon.png' />
        <title>Minecraft Skins Laboratory</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
