exports.findOne = (arr,id) => {
  return arr.find(val => val.id === +id)
}

exports.findIndex = (arr,id) => {
  return arr.findIndex(val => val.id === +id)
}