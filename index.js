const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


function findMatching(arr,query){
    return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()))
  
}
console.log(findMatching(drivers,"B"))

function fuzzyMatch(arr, query){
    return arr.filter((el) => el.startwith().includes(query.startsWith))
} 

function fuzzyMatch(arr, query){
    return arr.filter((el) => el.toLowerCase().startsWith(query))
} 
console.log(fuzzyMatch(drivers,"s"))

const driverss = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

  function matchName(drivers, query){
 const matchNamee = drivers.filter((el) => el.name === query);
 return matchNamee
}