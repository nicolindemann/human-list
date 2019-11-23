export const hList = (arr, conjunction) => (
  [arr.slice(0, -1).join(', '), arr.slice(-1)[0]]
    .join(arr.length < 2 ? '' : arr.length < 3 ? ` ${conjunction} ` : `, ${conjunction} `)
)

export const andList = arr => hList(arr, "and")

export const orList = arr => hList(arr, "or")