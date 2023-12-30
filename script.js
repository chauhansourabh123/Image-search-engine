const imgBucket = document.getElementById('imgBucket');
const inputBox = document.getElementById('inputBox');
const searchBtn = document.getElementById('searchBtn');
const showMore = document.getElementById('showMore')
const apiKey = 'N_dE8OW0nE-n39_RVheJISNByFZ80A8Pf5GPDu9KTx4';
let keyword;
let page = 1;



searchBtn.addEventListener('click', () => {

    fetchUrlData();
})

function fetchUrlData() {
    keyword = inputBox.value;
    let url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}%3E&client_id=${apiKey}&per_page=12`
    
    if (page == 1) {
        imgBucket.innerHTML = '';
    }
    fetch(url)
        .then(response => response.json())
        .then(value => {
            displayData(value);
        })
        .catch(err => console.log(err))
}

function displayData(value) {
    const results = value.results;
    results.map(result => {
        let image = document.createElement('img');
        image.src = result.urls.small;
        let imageLink = document.createElement('a');
        imageLink.href = result.links.html;
        imageLink.setAttribute('_target', 'blank');

        imageLink.appendChild(image);
        imgBucket.appendChild(imageLink)

        console.log('Done');
    })
    showMore.style.display = 'block';
}

showMore.addEventListener('click', () => {
    page++;
    fetchUrlData();
})
document.getElementById('inputForm').addEventListener('submit',(e)=>{
    e.preventDefault();
    fetchUrlData()
})