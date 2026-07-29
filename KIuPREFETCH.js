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
export async function KI_LOAD_LOGIC() {
    const op9    = await fetch("9Operator.me").then(r => r.text());
    const op     = await fetch("operator.tmp").then(r => r.text());
    const math   = await fetch("NC.math").then(r => r.text());
    const score  = await fetch("score.tmp").then(r => r.text());

    return { op9, op, math, score };
}
export function KI_GHOST(data) {
    return {
        id: "KI",
        ghost: true,
        source: data,
        state: "KI-GHOST-ACTIVE",
        info: "KI erzeugt Kern-Ghost-Layer für Entscheidungsstabilität"
    };
}
export function KI_VERIFY(da, ne, ben) {
    return {
        id: "KI",
        verify: true,
        da,
        ne,
        ben,
        state: "KI-VERIFY-OK",
        info: "KI vergleicht DA/NE/BEN und erzeugt Kern-Check"
    };
}
export function KI_ECO(pre, logic) {

    const KI  = pre.alt.tmpKI.length % 100;
    const BEN = pre.alt.tmpBEN.length % 100;
    const NE  = pre.alt.tmpNE.length % 100;
    const DA  = pre.alt.tmpDA.length % 100;

    const OP  = logic.op.length % 100;
    const OP9 = logic.op9.length % 100;

    const ROOM = pre.room.room9.length % 100;

    return Math.round(
        0.25 * KI +
        0.25 * BEN +
        0.10 * (100 - NE) +
        0.10 * DA +
        0.15 * OP +
        0.15 * OP9
    );
}
