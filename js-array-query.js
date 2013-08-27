var ArrayQuery = function(array) {

	/**
	 * removeAcento
	 */
	var removeAcento = function(str) {  
		var varString = new String(str);
		var stringAcentos = new String('àâêôûãõáéíóúçüÀÂÊÔÛÃÕÁÉÍÓÚÇÜ');
		var stringSemAcento = new String('aaeouaoaeioucuAAEOUAOAEIOUCU');

		var i = new Number();
		var j = new Number();
		var cString = new String();
		var varRes = '';

		for (i = 0; i < varString.length; i++) {
			cString = varString.substring(i, i + 1);
			for (j = 0; j < stringAcentos.length; j++) {
				if (stringAcentos.substring(j, j + 1) == cString){
					cString = stringSemAcento.substring(j, j + 1);
				}
			}
			varRes += cString;
		}
		return varRes; 
	};


	/**
	 * filter
	 */
	var filter = function(by, value) {
		var newArray = [];
		var navegacao = by.split(".");
		var isRegex = (Object.prototype.toString.call(value).indexOf("RegEx")>=0) ? true : false;

		array.map(function(item) {
			var itemValido = false;
			var profundidade = 0;


			var navega = function(profundidade, navItem) {
				var continuarNavegando = (profundidade+1 < navegacao.length) ? true : false;
				
				if(continuarNavegando) {
					var newItem = eval("navItem." + navegacao[profundidade]);
					var isArray = (Object.prototype.toString.call(newItem).indexOf("Array")>=0) ? true : false;
					
					if(!isArray) {
						arguments.callee(profundidade+1, newItem);
					} else {
						for(var x in newItem) {
							arguments.callee(profundidade+1, eval("newItem[" + x + "]"));
						}
					}
				} else {
					if(itemValido) return;
					newItem = eval("navItem." + navegacao[profundidade]);
					if(isRegex) itemValido = value.test(newItem);
					else itemValido = (newItem==value);
				}
			}(0, item);

			if(itemValido) newArray.push(item);
		});
		return newArray;
	};


	/**
	 * group
	 */
	var group = function(by) {
		var newArr = {};
		array.map(function(item) {
			var type = eval("typeof(item." + by+")");
			var chaves = eval("item." + by);
			
			if(type!="object") {
				chaves = [chaves];
			}

			for(var x in chaves) {
				var chave = chaves[x];
				if(typeof chave == 'function' || typeof chave == 'object') {
					break;
				}

				if(newArr[chave] == undefined) {
					newArr[chave] = [];
				}

				newArr[chave].push(item);
			}
		});

		// Cria um array de chaves para ordenar
		var Sortable = [];
		for(var chave in newArr) {
			if(typeof newArr[chave] != "object") {
				break;	
			}
			Sortable.push(chave);
		}

		// Ordena as chaves
		Sortable.sort(function(a, b) {
			var newA = a.toLowerCase();
			var newB = b.toLowerCase();
			newA = removeAcento(newA);
			newB = removeAcento(newB);

			if (newA < newB) //sort string ascending
				return -1 
			if (newA > newB)
				return 1
			return 0
		});

		// Une as chaves e dados num novo array
		var finalArr = {};
		for(var i in Sortable) {
			var chave = Sortable[i];
			finalArr[chave] = newArr[chave];
			newArr[chave] = null;
		}

		return finalArr;
	};

	return {
		group: group,
		filter: filter
	}
}