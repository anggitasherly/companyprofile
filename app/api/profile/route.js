const profile = [
    {name: "Anggita Sherly Amalia", role:"Peserta Bootcamp", favoriteTech: ["React", "Tailwind CSS", "Next.js", "Javascript"]}
];

export async function GET() {
    return Response.json(profile);
}