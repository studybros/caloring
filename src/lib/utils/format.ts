export function formatKRW(value: number): string {
  return new Intl.NumberFormat("ko-KR").format(value) + "원";
}

export function formatKRWShort(value: number): string {
  if (value >= 100000000) {
    const eok = Math.floor(value / 100000000);
    const man = Math.floor((value % 100000000) / 10000);
    return man > 0 ? `${eok}억 ${new Intl.NumberFormat("ko-KR").format(man)}만원` : `${eok}억원`;
  }
  if (value >= 10000) {
    return `${new Intl.NumberFormat("ko-KR").format(Math.floor(value / 10000))}만원`;
  }
  return formatKRW(value);
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat("ko-KR").format(value);
}

export function formatPercent(value: number, decimals: number = 2): string {
  return `${value.toFixed(decimals)}%`;
}
