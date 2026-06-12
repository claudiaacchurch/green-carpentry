export default function Head() {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <>
      <link rel="preconnect" href="https://iframe.mediadelivery.net" />
      <link rel="dns-prefetch" href="https://iframe.mediadelivery.net" />
      <link
        rel="preload"
        as="image"
        href={`${base}/media/green-carpentry-logo.png`}
      />
    </>
  );
}