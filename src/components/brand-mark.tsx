// Pixel-style "MAR" monogram, hand-vectored to match the brand icon.
// Drawn on a 100px module grid; uses currentColor so it themes automatically.
const MARK_RECTS: Array<[number, number]> = [
  // M (cols 0–4)
  [0, 0],
  [4, 0],
  [0, 1],
  [1, 1],
  [3, 1],
  [4, 1],
  [0, 2],
  [2, 2],
  [4, 2],
  [0, 3],
  [4, 3],
  [0, 4],
  [4, 4],
  // A (cols 6–10)
  [6, 0],
  [7, 0],
  [8, 0],
  [9, 0],
  [10, 0],
  [6, 1],
  [10, 1],
  [6, 2],
  [10, 2],
  [6, 3],
  [7, 3],
  [8, 3],
  [9, 3],
  [10, 3],
  [6, 4],
  [10, 4],
  // R (cols 12–16)
  [12, 0],
  [13, 0],
  [14, 0],
  [15, 0],
  [12, 1],
  [16, 1],
  [12, 2],
  [13, 2],
  [14, 2],
  [15, 2],
  [12, 3],
  [14, 3],
  [12, 4],
  [15, 4],
];

const U = 100;

export function BrandMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1700 500"
      fill="currentColor"
      role="img"
      aria-label="Muhammad Ahmed Rangila logo"
      {...props}
    >
      {MARK_RECTS.map(([c, r]) => (
        <rect key={`${c}-${r}`} x={c * U} y={r * U} width={U} height={U} />
      ))}
    </svg>
  );
}

export function getMarkSVG(color: string) {
  const rects = MARK_RECTS.map(
    ([c, r]) => `<rect x="${c * U}" y="${r * U}" width="${U}" height="${U}"/>`
  ).join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1700 500" fill="${color}">${rects}</svg>`;
}
