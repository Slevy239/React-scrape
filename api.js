fetch("https://api-football-beta.p.rapidapi.com/teams?id=33", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "api-football-beta.p.rapidapi.com",
		"x-rapidapi-key": "ab96d8b704c0fe2be55ed8da41e367ba"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});
