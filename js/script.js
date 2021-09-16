//fetch the json file(here I am doing fetching API)
let wrapperElement = document.querySelector("#photo-list");
fetch("./js/airbnb.json")
	.then((response) => response.json())
	.then((result) => {
		let superHost;
		result.SmuttureINaturen.house.forEach((whatever) => {
			if (whatever.host.superhost === false) {
				superHost = "inactive";
			} else {
				superHost = "";
			}

			wrapperElement.innerHTML += `<a href="natur.html"><div class="parent">
			<div class="div3"><i class="far fa-heart"></i>
			</div>
			<div class="div1">
				
				<img src="../images/${whatever.images[0]}" alt=""
				/>
				<div class="superhost ${superHost}">SUPERHOST</div>
			</div>

			<div class="div2">
				<p>${whatever.info.subInfo}</p>
				<h2>${whatever.info.mainInfo}</h2>
				<hr class="short" />
				<p>${whatever.gæster} gæster . Studio-lejlighed . 
				 ${whatever.senge} senge · ${whatever.bad} bad </p>
				<p class="star"><i class="fas fa-star"></i>4,94(16 omtaler)</p>
			</div>
           </div>
		  </a>
		<hr class="long" />`;
		});
	});
