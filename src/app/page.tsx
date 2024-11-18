import { getApiKeys } from "./lib/f1";

export default async function Home() {
  const { publicKey, secretKey } = await getApiKeys();
  return (
    <div>
      <h1>Hello World</h1>
      <p>{publicKey}</p>
      <p>{secretKey}</p>
    </div>
  );
}
