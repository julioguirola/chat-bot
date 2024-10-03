export const dynamic = "force-dynamic";
export async function GET() {
  const res = await fetch("https://api.binance.com/api/v3/exchangeInfo");
  const result = await res.json();
  return Response.json(result);
}
