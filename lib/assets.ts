/** Public assets need the repository prefix when hosted on GitHub Pages. */
export function assetPath(path: string) {
  return path.startsWith("/") ? `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${path}` : path;
}
