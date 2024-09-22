export const isValidUrl = (urlString: string) => {
  try {
    return Boolean(new URL(urlString));
  } catch (_) {
    return false;
  }
};
