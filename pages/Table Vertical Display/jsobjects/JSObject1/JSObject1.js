export default {
	myVar1: [],
	myVar2: {},
	myFun1: () => {
		var all_items = Query1.data;
		var final_array = [];
		var item = Query1.data[0];
		var length_of_items = Object.keys(item).length;
		for(var i = 0; i<length_of_items ; i++){
			var new_obj = {};
			new_obj["key"] = (Object.keys(item))[i];
			for(var l = 0; l < all_items.length; l++){
				var new_key_suffix = (l+1).toString();
				var new_key = "Item "+new_key_suffix;
				var ref_key = (Object.keys(item))[i];
				var new_value = Query1.data[l][ref_key];
				new_obj[new_key] = new_value;
			}
			final_array.push(new_obj);
		}
		return final_array;
	},
	myFun2: async () => {
		//use async-await or promises
	}
}