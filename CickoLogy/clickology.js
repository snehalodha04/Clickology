
var news = [];

var getNews = function(type) {
	fetch(`https://inshortsapi.vercel.app/news?category=${type}`)
	.then(response => response.json())
	.then(response => {
		console.log(response);
		news = [];
		let data = response.data
		for(let res in data){
			news[res] = {'author': data[res].author, 'title':data[res].title, 'content':data[res].content, 'image': data[res].imageUrl, 'date': data[res].date};
		}
		console.log(news);
		document.getElementById('cardNews').innerHTML = "";
		for(let i in news){
			document.getElementById('cardNews').innerHTML += `<div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col col-sm-12 text-center my-2" id="image">
           <img src="${news[i].image}" width="auto" height="400"> 
        </div>
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-success" id="author">Author Name: ${news[i].author}</strong>
          <h3 class="mb-0" id="title">${news[i].title}</h3>
          <div class="mb-1 text-muted" id="date">${news[i].date}</div>
          <p class="mb-auto" id="content">${news[i].content}</p>
        </div>
      </div>`
		}
		document.getElementById("load").style.visibility="hidden";
	})
	.catch(err => console.error(err));
}

getNews('all');