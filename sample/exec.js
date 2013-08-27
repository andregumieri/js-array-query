var o = new ArrayQuery(Data.result);

// Array Completa
console.log("Array completa (1050 itens; 53.557 linhas; 2MB)");
console.log(Data.result);

// Agrupa por ano
var grupoPorAno = o.group("info.extra.ano");
console.log("Agrupamento por ano:");
console.log(grupoPorAno);

// Agrupa por empresa
var grupoPorEmpresa = o.group("company");
console.log("Agrupamento por empresa:");
console.log(grupoPorEmpresa);

// Agrupa por país
var grupoPorPais = o.group("info.pais");
console.log("Agrupamento por pais:");
console.log(grupoPorPais);

// Agrupa por tags
var grupoPorTags = o.group("tags");
console.log("Agrupamento por tag:");
console.log(grupoPorTags);

// Agrupa por sexo
var grupoPorSexo = o.group("gender");
console.log("Agrupamento por sexo:");
console.log(grupoPorSexo);

// Agrupa por status
var grupoPorStatus = o.group("isActive");
console.log("Agrupamento por status:");
console.log(grupoPorStatus);



/***** FILTROS ******/
// Filtra por sexo 'feminino' via string
var filtroPorSexo = o.filter("gender", "female");
console.log("Filtro por sexo:");
console.log(filtroPorSexo);

// Filtra por pais: Brasil, Cuba ou Argentina com Regex
var filtroPorPais = o.filter("info.pais", /(Bra[sz]il|Cuba|Argentina)/i);
console.log("Filtro por pais (Brasil, Cuba ou Argentina):");
console.log(filtroPorPais);



/***** FILTRO + AGRUPAMENTO ******/
// Filtra por idade: De 23 a 31 por regex
var filtroPorIdade = o.filter("age", /2[3-9]|3[0-1]/);
console.log("Filtro por idade (23 a 31):");
console.log(filtroPorIdade);

var oIdade = new ArrayQuery(filtroPorIdade);
var grupoFiltroPorIdade = oIdade.group("age");
console.log("Filtro de idade agrupado:");
console.log(grupoFiltroPorIdade);