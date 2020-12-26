export default function formatAriaPrice(price: number) {
  const [real, cents] = price.toFixed(2).split('.');
  if (cents === '00') {
    return `${real} Reais`;
  }
  return `${real} e ${cents}`;
}
