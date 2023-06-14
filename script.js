const library =[
	

{
	author:"bill gates",
	title:"The road ahead",
	readingStatus:"true",
},
{
	author:"shivaji sawant",
	title:"mrityunjay",
	readingStatus:"false",
},
{
	author:"jay shetty",
	title:"The monk who sold his ferrari",
	readingStatus:"true",
},
];
const numberOfBooksRead = () => {
	let count=0;
for(let i=0 ; i<library.length;i++){
	library[i].readingStatus && count++;
}
return count;
  // write your code here
};

// Do not change the code below

alert(numberOfBooksRead());
