// save localStorage
export function saveToLocal(id, key, value) {
  let seller = window.localStorage.__seller__
  if (!seller) {
    seller = {}
    seller[id] = {}
  } else {
    // JSON.parse -> jsonString transform to jsonObj
    seller = JSON.parse(seller)
    if (!seller[id]) {
      seller[id] = {}
    }
  }
  seller[id][key] = value
  // JSON.stringify -> jsonObj transform to jsonString
  window.localStorage.__seller__ = JSON.stringify(seller)
}

// read localStorage
export function loadFromLocal(id, key, def) {
  let seller = window.localStorage.__seller__
  if (!seller) {
    return def
  }
  // JSON.parse -> jsonString transform to jsonObj
  seller = JSON.parse(seller)[id]
  if (!seller) {
    return def
  }
  let ret = seller[key]
  return ret || def
}
