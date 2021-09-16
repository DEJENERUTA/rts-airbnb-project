let naturElement = document.querySelector("#detail-natur");
fetch("./js/airbnb.json")
	.then((response) => response.json())
	.then((result) => {
		/* let superHost; */
		result.SmuttureINaturen.house.forEach((whatever) => {
			/* if (whatever.host.superhost === false) {
				superHost = "inactive";
			} else {
				superHost = "";
			} */

			naturElement.innerHTML += `<div class="natur-big-img">
			<div class="natur-small-img">
				<a href="index.html">
				<img src="../images/${whatever.images[0]}" alt=""
				/>
				</a>
			</div>
		</div>`;
		});
	});
