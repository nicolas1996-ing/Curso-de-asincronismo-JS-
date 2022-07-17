const content = document.getElementById("content");
const API =
  "https://youtube138.p.rapidapi.com/channel/videos/?id=UCJ5v_MCY6GNUBTO8-D3XoAg&hl=en&gl=US";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "2208c77c81msh003d1e253e072efp18336ajsn3ee74a27761f",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

// fetch(API, options)
// 	.then(response => response.json())
// 	.then(response => console.log(response.contents))
// 	.catch(err => console.error(err));

(async () => {
  try {
    const resp = await fetch(API, options);
    const data = await resp.json();
    const videos = await data.contents;
    let view = `
    ${videos
      .map(
        (v) => `
			<div class="group relative">
				<div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
					<img src="${v.video.thumbnails[0].url}" alt="${v.video.thumbnails.title}" class="w-full" style="height: 300px" />
				</div>
				<div class="mt-4 flex justify-between">
					<h3 class="text-sm text-gray-700">
						<span aria-hidden="true" class="absolute inset-0"></span>
						${v.video.title}
					</h3>
				</div>
			</div>
    	`
      )
      .slice(0, 10)
      .join("")}
    `;
    content.innerHTML = view; // inserción de comentario
    alert("fetch success");
  } catch (error) {
    alert(error);
    console.log(error);
  }
})();
