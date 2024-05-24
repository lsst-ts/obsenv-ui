export const formatIsoString = (datetime: string): string => {
  console.log(datetime)
  let step1 = datetime.replace(/\.\d*/i, '')
  let step2 = step1.replace(/\+(.*)/i, 'Z')
  return step2
}