const ReactRef = typeof window !== "undefined" ? window.React : null;

if (!ReactRef) {
  throw new Error("React global not found. Ensure React is loaded before auth-bundle.js.");
}

export const useState = ReactRef.useState;
export const useEffect = ReactRef.useEffect;
export default ReactRef;
