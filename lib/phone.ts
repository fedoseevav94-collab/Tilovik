export function normalizeRussianMobilePhone(value: string) {
  let digits = value.replace(/\D/g, "");

  if (digits.length === 11 && digits.startsWith("8")) {
    digits = `7${digits.slice(1)}`;
  }

  if (digits.length === 10 && digits.startsWith("9")) {
    digits = `7${digits}`;
  }

  if (digits.length !== 11 || !digits.startsWith("7") || digits[1] !== "9") {
    return null;
  }

  return `+${digits}`;
}
