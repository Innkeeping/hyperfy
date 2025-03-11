const warned = new Set()
export function warn(str) {
  if (warned.has(str)) return
  console.warn(str)
  warned.add(str)
<<<<<<< HEAD
}
=======
}
>>>>>>> 6b83293b60dbebb288af7469aca59955ff5e0246
