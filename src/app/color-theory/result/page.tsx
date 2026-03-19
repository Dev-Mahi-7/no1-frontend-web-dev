"use client";

import { useColorStore } from "@/feat/color-theory/store/useColorStore";
import { parseJSON } from "@/feat/color-theory/utils/parseResponse";


export default function Result() {
  const result = useColorStore((s) => s.result);

  const parsed = parseJSON(result?.text || "");

  if (!parsed) return <p>Loading...</p>;

  return (
    <div>
      <div style={{ background: parsed.primary }}>Primary</div>
      <div style={{ background: parsed.secondary }}>Secondary</div>
      <div style={{ background: parsed.accent }}>Accent</div>

      <p>{parsed.explanation}</p>
    </div>
  );
}