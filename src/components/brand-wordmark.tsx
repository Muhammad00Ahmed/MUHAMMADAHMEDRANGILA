export function BrandWordmark(props: React.ComponentProps<"img">) {
  const { className, alt, ...rest } = props;
  return (
    <img
      src="/images/brand/full-name-logo.png"
      alt={alt ?? "Muhammad Ahmed Rangila"}
      className={["w-auto select-none dark:invert", className]
        .filter(Boolean)
        .join(" ")}
      draggable={false}
      {...rest}
    />
  );
}

export function getWordmarkSVG(color: string) {
  const isLight = color === "#000" || color === "#000000";
  const filter = isLight ? "" : ' style="filter:invert(1)"';
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2065 762"><image width="2065" height="762" href="/images/brand/full-name-logo.png"${filter}/></svg>`;
}
