// code your solution here
const record = [
    { year: "2018", result: "N/A"},
    { year: "2017", result: "N/A"},
    { year: "2016", result: "N/A"},
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"}
    
  ]

  function superbowlWin(array){
    let newArray= array.find(element =>element.result === "W" );
   
  return newArray ?  newArray.year : newArray ;
  
}

  console.log(superbowlWin(record));
