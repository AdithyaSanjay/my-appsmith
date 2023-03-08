export default {
	getDataWithIds: () => {
		let offset = (Table1.pageNo - 1) * Table1.pageSize;
		return fetch_users_data.data?.map((item, idx) => {
			return {
				...item,
				srno: offset + idx + 1,
			}
		});
	}
}