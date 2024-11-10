export default function cleanSet(set, startString) {
  if (
    !set && !startString && !(set instanceof Set) && typeof startString !== 'string') {
    return '';
  }

  const parts = [];

  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const valueSubstr = value.substring(startString.length);

      if (valueSubstr && valueSubstr !== value) {
        parts.push(valueSubstr);
      }
    }
  }
  return parts.join('-');
}
