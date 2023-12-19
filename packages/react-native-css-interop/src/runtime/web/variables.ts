export const useUnstableNativeVariable = () => {
  throw new Error("Not implemented on web");
};

export function vars<T extends Record<`--${string}`,string|number>>(variables: T) {
  const $variables: Record<string, string> = {};

  for (const [key, value] of Object.entries(variables)) {
    if (key.startsWith("--")) {
      $variables[key] = value.toString();
    } else {
      $variables[`--${key}`] = value.toString();
    }
  }
  return $variables;
}
