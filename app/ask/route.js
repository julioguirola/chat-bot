export async function POST(request) {
    const body = await request.json()
    const res = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyDyCLVxtIBN6ZPLHagM4Rdye1O4Pt_EM4g", {
        method: "POST",
        headers: {
            "Content-Type": "application-json"
        },
        body: JSON.stringify({
            "contents": [{
              "parts":[{
                "text": body.quest}]}]})
    }
    )
    const data = await res.json()
    return Response.json(data)
}