import Head from "next/head";
import Form from "./form";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Next.js!</h1>
      </main>
      <Form />
    </div>
  );
}
