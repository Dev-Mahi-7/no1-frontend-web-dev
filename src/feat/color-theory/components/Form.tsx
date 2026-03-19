"use client";

import { useRouter } from "next/navigation";
import { useColorStore } from "../store/useColorStore";

export default function Form() {
  const router = useRouter();
  const setData = useColorStore((s) => s.setData);

  const handleSubmit = async () => {
    const domain = "Real Estate";
    const audience = "Corporate";
    const tone = "Luxury";

    const res = await fetch("/api/colortheory/generate", {
      method: "POST",
      body: JSON.stringify({ domain, audience, tone }),
    });

    const data = await res.json();

    setData({ domain, audience, tone, result: data });
    router.push("/color-theory/result");
  };

  return <button onClick={handleSubmit}>Generate Palette</button>;
}
