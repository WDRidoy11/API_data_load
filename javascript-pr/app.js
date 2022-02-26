const fecthData = async(config) => {
    try {
        const res = await axios(config)
        return res.data;
    } catch (err) {
        throw Error(`Data is not found`)
    }
};
let postsElement = document.querySelector('.posts');
const loadAllData = async() => {
    const posts = await fecthData('https://jsonplaceholder.typicode.com/posts')
    posts.map((post) => {
        let postCreateElement = document.createElement('div');
        postCreateElement.classList.add('post');
        postCreateElement.innerHTML = `
        <h4 class="post-title">${post.title}</h4>
        <p class="post-body">${post.body}</p>`;
        postsElement.appendChild(postCreateElement)
    })
};
loadAllData();