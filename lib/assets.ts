const basePath = "/iaflmun";

export function asset(path: string) {
  if (!path.startsWith("/")) {
    return `${basePath}/${path}`;
  }
  return `${basePath}${path}`;
}

