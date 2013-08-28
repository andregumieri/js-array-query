js-array-query
==============

Filter and group array results


How to use
----------

```bash
var o = new ArrayQuery(myArray);
var grouped = o.group("key.to.group");
var filtered = o.filter("key.to.filter", /(Values|to|get)/i);
```

Samples
-------
Array model used in samples:
```bash
Data = {
	...
	result: [
		{
			"id": 0,
			"guid": "566d2c0e-74ba-4522-b199-ff7172da5f8e",
			"isActive": true,
			"balance": "$3,081.00",
			"picture": "http://placehold.it/32x32",
			"age": 32,
			"name": "Curtis Terry",
			"gender": "male",
			"company": "Orbean",
			"email": "curtisterry@orbean.com",
			"phone": "+1 (999) 548-2761",
			"address": "777 Delmonico Place, Gallina, Florida, 7316",
			"about": "Eu est et nisi consequat exercitation aute do incididunt sit nulla nulla consectetur excepteur tempor. Officia tempor sint eu nulla culpa amet veniam consequat culpa enim reprehenderit minim consectetur. Consectetur irure quis proident reprehenderit ullamco. Veniam officia exercitation ullamco labore aliquip.\r\n",
			"registered": "2001-10-17T03:33:47 +02:00",
			"latitude": 8.757587,
			"longitude": -6.204557,
			"info": {
				"a": "magna",
				"empresa": "Frosnex",
				"idade": 21,
				"pais": "Iraq",
				"extra": {
				    "ano": "2010"
				}
			},
			"tags": [
				"do",
				"dolore",
				"quis",
				"ex",
				"ea",
				"culpa",
				"laborum"
			],
			"friends": [
				{
					"id": 0,
					"name": "Jewell Cooley"
				},
				{
					"id": 1,
					"name": "Berger Gallegos"
				},
				{
					"id": 2,
					"name": "Clarke Glover"
				}
			],
			"randomArrayItem": "cherry"
		},
		...
	]
}
```

Group by year (ano in portuguese)
```bash
var o = new ArrayQuery(Data.result);
var group = o.group("info.extra.ano");
console.log(group);
```

Group by company
```bash
var o = new ArrayQuery(Data.result);
var group = o.group("company");
console.log(group);
```

Filter by gender: female
```bash
var o = new ArrayQuery(Data.result);
var filter = o.filter("gender", "female");
console.log(filter);
```

Filter by country (pais in portuguese): Brazil, Brasil, Cuba, Argentina 
```bash
var o = new ArrayQuery(Data.result);
var filter = o.filter("info.pais", /(Bra[sz]il|Cuba|Argentina)/i);
console.log(filter);
```

Filter and then group by age: 23 to 31
```bash
var of = new ArrayQuery(Data.result);
var filter = of.filter("age", /2[3-9]|3[0-1]/);
var og = new ArrayQuery(filter);
var group = og.group("age");
console.log(group);
```
