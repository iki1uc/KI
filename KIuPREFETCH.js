export async function KI_PREFETCH() {

    const tmpKI  = await fetch("KI.tmp").then(r => r.text());
    const tmpBEN = await fetch("BEN.tmp").then(r => r.text());
    const tmpNE  = await fetch("NE.tmp").then(r => r.text());
    const tmpDA  = await fetch("DA.tmp").then(r => r.text());

    const room3 = await fetch("KINC3.room").then(r => r.text());
    const room6 = await fetch("KINC6.room").then(r => r.text());
    const room9 = await fetch("KINC9.room").then(r => r.text());

    return {
        axiome: KI_AXIOM,
        alt: { tmpKI, tmpBEN, tmpNE, tmpDA },
        room: { room3, room6, room9 },
        state: "KI-PREFETCH-READY"
    };
}
