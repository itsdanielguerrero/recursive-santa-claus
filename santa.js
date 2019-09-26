function deliverPresents(houses) {
  if (houses.length === 1){ //base case - if length is one print last name on list
    console.log('Delivering presents to ' + houses[0])
    return 0
  }

  var nextKid = houses[0] //grab next kid off of the list
  var restOfKids = houses.slice(1, houses.length) //store rest of kids on the list
  console.log('Delivering presents to ' + nextKid)
  deliverPresents(restOfKids) //recursive call
}

module.exports = deliverPresents
