export default {
	fillTable: () => {
		return appsmith.URL.queryParams.data === "movies" ? Fetch_movies.data : Fetch_users.data;
	}
}