export function formatDate(input?: string | number): string {
  const date = input ? new Date(input) : new Date();
  return date.toLocaleDateString('nl-NL', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}
