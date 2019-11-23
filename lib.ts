export const hList = (arr, conjunction, withoutSerial = false) => (
  [arr.slice(0, -1).join(', '), arr.slice(-1)[0]]
    .join(arr.length < 2 ? '' : arr.length < 3 || withoutSerial ? ` ${conjunction} ` : `, ${conjunction} `)
)

export const andList = (arr, withoutSerial = false) => hList(arr, "and", withoutSerial)

export const orList = (arr, withoutSerial = false) => hList(arr, "or", withoutSerial)