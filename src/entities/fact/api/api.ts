import { useQueryData } from "../../../shared/api/getData";
export function useQueryFact(index: number, signal: AbortSignal) {
  return useQueryData(
    {
      signal: signal,
    },
    `https://catfact.ninja/fact`,
    ["fact", index.toString()]
  );
}
