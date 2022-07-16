import fetch from "node-fetch";

const API = "https://youtube138.p.rapidapi.com/channel/videos/";
// const content = document.getElementById("content");

const options = {
  method: "GET",
  url: API,
  params: { id: "UC9k0tTsh_qStx0HPuPftSsg", hl: "en", gl: "US" },
  headers: {
    "X-RapidAPI-Key": "2208c77c81msh003d1e253e072efp18336ajsn3ee74a27761f",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

async function fetchData() {
  const resp = await fetch(API,options);
  const data = await resp.json();
  return data;
}

// ejectur automaticamente la funcíon 
(async () => {
  try {
    const videos = await fetchData(); 
    console.log(videos)
  } catch (error) {
    
  }
})();

// const youTubeAPI = async () => {
//   try {
//     // const { data: videos } = await axios.request(options);
//     const resp = await fetch(API, options);
//     const videos = await resp.json();

    // let view = `
    // ${videos.contents
    //   .map(
    //     (v) => `

    //     <div class="group relative">
    //         <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
    //             <img src="${v.video.thumbnails.high.url}" alt="${v.video.thumbnails.description}" class="w-full" />
    //         </div>
    //         <div class="mt-4 flex justify-between">
    //             <h3 class="text-sm text-gray-700">
    //                 <span aria-hidden="true" class="absolute inset-0"></span>
    //                 ${v.video.title}
    //             </h3>
    //         </div>
    //     </div>

    // `
    //   )
    //   .slice(0, 4)
    //   .join("")}
    // `;
    // content.innerHTML = view
//     console.log(videos);
//   } catch (error) {
//     console.log(error);
//   }
// };

// youTubeAPI();
