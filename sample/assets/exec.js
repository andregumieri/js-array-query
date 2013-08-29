// Start new ArrayQuery Object
var o = new ArrayQuery(Data.result);

// Show the complete array
console.log("Complete array (1050 items; 53.557 lines; ~2MB)");
console.log(Data.result);



/*******************************************
 ** Group array functions - sync          **
 *******************************************/

// Group by year (ano in portuguese)
var groupByYear = o.group("info.extra.ano");
console.log("[sync] Group by year:");
console.log(groupByYear);

// Group by company
var groupByCompany = o.group("company");
console.log("[sync] Group by company:");
console.log(groupByCompany);

// Group by country (pais in portuguese)
var groupByCountry = o.group("info.pais");
console.log("[sync] Group by country (pais in portuguese):");
console.log(groupByCountry);



/*******************************************
 ** Group array functions - async         **
 *******************************************/

// Group by tags
o.group("tags", function(group) {
	console.log("[async] Group by tags:");
	console.log(group);
});

// Group by gender
o.group("gender", function(group) {
	console.log("[async] Group by gender:");
	console.log(group);
});

// Group by status
o.group("isActive", function(group) {
	console.log("[async] Group by status:");
	console.log(group);
});



/*******************************************
 ** Filter array functions - sync         **
 *******************************************/
// Filter by gender using string
var filterByGender = o.filter("gender", "female");
console.log("[sync] Filter by female gender using string:");
console.log(filterByGender);

// Filter by country using regex
var filterByCountry = o.filter("info.pais", /(Bra[sz]il|Cuba|Argentina)/i);
console.log("[sync] Filter by country using regex (Brasil, Brazil, Cuba or Argentina):");
console.log(filterByCountry);



/*******************************************
 ** Filter array functions - async        **
 *******************************************/
// Filter by company using string
o.filter("company", "Katakana", function(filtered) {
	console.log("[async] Filter by company using string:");
	console.log(filtered);
});

// Filter by age using regex
o.filter("age", /2[3-9]|3[0-1]/, function(filtered) {
	console.log("[async] Filter by age using regex:");
	console.log(filtered);
});