export const dynamic = 'force-dynamic'
export async function GET() {
    function generarNumeroAleatorio() {
        const min = 1000;
        const max = 1500;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return Response.json({num: generarNumeroAleatorio()})
}