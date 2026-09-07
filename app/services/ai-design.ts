export type DesignGenerationInput = {
  prompt: string;
  style: string;
  palette: string;
  composition: string;
};

export type DesignGenerationResult = {
  id: string;
  title: string;
  status: "mock";
  preview: string;
};

export async function generateDesign(input: DesignGenerationInput): Promise<DesignGenerationResult[]> {
  await new Promise((resolve) => setTimeout(resolve, 900));
  return Array.from({ length: 4 }, (_, index) => ({
    id: `${input.style.toLowerCase()}-${index + 1}`,
    title: `${input.style} study ${index + 1}`,
    status: "mock" as const,
    preview: `https://images.unsplash.com/photo-${[1549490349, 1550859492, 1518709268, 1513364774][index]}?auto=format&fit=crop&w=700&q=85`,
  }));
}
