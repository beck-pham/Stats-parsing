export const dateStringToDate = (dateString: string): Date => {
  const dateSeparator = dateString
  .split('/')
  .map((value: string): number => {
    return parseInt(value);
  })
  // 28/10/2008
  return new Date(dateSeparator[2], dateSeparator[1] - 1, dateSeparator[0]);
}