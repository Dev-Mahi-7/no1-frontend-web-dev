export const parseJSON = (text: string) => {
  try {
    const clean = text.replace(/```json|```/g, "");
    return JSON.parse(clean);
  } catch {
    return null;
  }
};