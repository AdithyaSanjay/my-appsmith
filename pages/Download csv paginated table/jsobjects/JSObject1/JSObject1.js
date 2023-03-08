export default {
  myVar1: [],
  myVar2: {},
  clearStore: () => {
    storeValue("dataArray", undefined);
  },
  savetoArray: async () => {
    let dataArray = appsmith.store.dataArray || [];
    dataArray.push(Api1.data[0]);
    storeValue("dataArray", dataArray);
    console.log(appsmith.store.dataArray);
  },
  convertToCSV() {
    const arr = appsmith.store.dataArray;
    const array = [Object.keys(arr[0])].concat(arr);
    console.log(
      array
        .map((it) => {
          return Object.values(it).toString();
        })
        .join("\n")
    );
  },
	fetchAllData: async () => {
		let records = [];
		let currentCount = 1000;
		let idx = 0;
		while (currentCount == 1000) {
			let fetchedData = await fetchSheetData.run({ limit: 1000, offset: idx * 1000 });
			currentCount = fetchedData.length;
			idx++;
			records = [...records, ...fetchedData];
		}
    const arr = [Object.keys(records[0])].concat(records);
    const data = arr
        .map((it) => {
          return Object.values(it).toString();
        })
        .join("\n");
		download(data ,'data.csv','text/csv');
	}
};