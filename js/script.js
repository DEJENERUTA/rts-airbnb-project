//fetch the json file(here I am doing fetching API)
fetch("airbnb.json")
	.then((response) => response.json())
	.then((data) => {
		console.log(data);
	});
