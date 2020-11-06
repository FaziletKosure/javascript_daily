const x=(myString,myLetter)=>[...myString].filter(i=>i==myLetter).length
console.log(x("clarusway","a"));

const y=(myString,myLetter)=>[...myString].reduce((a,c)=>c==myLetter ? ++a: a,0)
console.log(y("claruswayaa","a"));

