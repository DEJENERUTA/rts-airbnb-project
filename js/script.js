//fetch the json file(here I am doing fetching API)
let wrapperElement = document.querySelector("#photo-list");
fetch("./js/airbnb.json")
	.then((response) => response.json())
	.then((result) => {
		result.SmuttureINaturen.house.forEach((whatever) => {
			wrapperElement.innerHTML += `<div class="parent">
			<div class="div1">
				<a href="natur.html">
					<img src="../images/${whatever.images[0]}" alt=""
				/></a>
			</div>
			<div class="div2">
				<p>Hel(t) hytte i kirke Hyllinge</p>
				<h2>Architectural vacation house exotic courtyard</h2>
				<hr class="short" />
				<p>4 gæster. 1 Studio-lejlighed. 2 senge. 1,5 bad</p>
				<p class="star"><i class="fas fa-star"></i>4,94(16 omtaler)</p>
			</div>
			<div class="div3"><i class="far fa-heart"></i></div>
		</div>
		<hr class="long" />`;
		});
	});

//example(for example if I delete some text from HTML),
//I have to see it in the browser, or in my website because
// of json data, we do that by using js
/* let fetchData = fetch("./js/airbnb.json")
	.then((response) => response.json())
	.then((data) => {
		console.log(data);
		document.querySelector(
			"#photo-list"
		).innerHTML = `<h1>Smutture i naturen</h1>`;
	}); */
