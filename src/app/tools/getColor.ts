export function getBgColorClass(color: string) {
  switch (color) {
    case 'blue':
      return 'bg-[var(--blue)]';
    case 'red':
      return 'bg-[var(--red)]';
    case 'green':
      return 'bg-[var(--green)]';
    case 'black':
      return 'bg-[var(--black)]';
  }
  return 'bg-[var(--blue)]';
}
