const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/iaflmun";

export function asset(path: string) {
  if (!path.startsWith("/")) {
    return `${basePath}/${path}`;
  }
  return `${basePath}${path}`;
}

