export const formatNumber = (value: number) => {
  return new Intl.NumberFormat("ro-RO").format(value);
};

export const formatDateRo = (value: string) => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("ro-RO", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(date);
};