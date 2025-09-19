/**
 * Join class names conditionally in a type-safe way.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}


