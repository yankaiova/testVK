import { useQueryData } from "../../../shared/api/getData";

export function useQueryUser(name: string, signal: AbortSignal) {
  return useQueryData(
    {
      signal: signal,
      params: { name: name },
    },
    `https://api.agify.io`,
    ["user", name]
  );
}
