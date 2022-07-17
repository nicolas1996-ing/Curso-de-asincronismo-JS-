import axios from "axios";

const content = document.getElementById("content");
const options = {
  method: "GET",
  url: "https://youtube138.p.rapidapi.com/channel/videos/",
  params: { id: "UCJ5v_MCY6GNUBTO8-D3XoAg", hl: "en", gl: "US" },
  headers: {
    "X-RapidAPI-Key": "2208c77c81msh003d1e253e072efp18336ajsn3ee74a27761f",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

// axios.request(options)
//   .then(function (response) {
//     console.log(response.data.contents);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

const fetchData = async () => {
  try {
    const { data: resp } = await axios.request(options);
    const { contents: videos, cursorNext } = resp;

    let view = `
    ${videos.contents
      .map(
        (v) => `

        <div class="group relative">
            <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${v.video.thumbnails.hight.url}" alt="${v.video.thumbnails.description}" class="w-full" />
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
      .slice(0, 4)
      .join("")}
    `;
    content.innerHTML = view;
    console.log(videos);
  } catch (error) {
    console.log(error);
  }
};

fetchData();
