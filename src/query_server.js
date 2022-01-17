const { get } = require("lodash");
import './sass/main.scss';

const baseUrl = "http://localhost:3000";


function reqServer(url, method = 'GET', data = {}) {
    const options = {
        method,
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        }
    }
    if (method !== "GET" &&  method !== "DELETE") {
        options.body = JSON.stringify(data);
    }
    return fetch(baseUrl+url, options).then(res => res.json())
}

const refs = {
    listNode: document.querySelector(".post-list"),
    form: document.querySelector("#create-post")
}

// function renderPostList() {
//     reqServer('/posts').then(data => {
//         const markup = data.map(post => `
//         <li data-id="${post.id}">
//             <h3>${post.title}</h3>
//             <p>${post.text}</p>
//             <small><button>Edit</button${post.author}</small>
//         </li>`).join('');
//         refs.listNode.innerHTML = markup;
//     })
// }

function renderPostList() {
  reqServer('/posts').then(data => {
    const markup = data
      .map(
        post =>
          `<li data-id="${post.id}">` +
          `<h3>${post.title}</h3>` +
          `<p>${post.text}</p>` +
          `<small><button>Edit</button> ${post.author}</small>` +
          `</li>`,
      )
      .join('');
    refs.listNode.innerHTML = markup;
  });
}

renderPostList();

refs.listNode.addEventListener('click', editPost);


function editPost(e) {
    if (e.target.nodeName !== "BUTTON") return;
    const id = e.target.closest("li").dataset.id;
    reqServer('/posts/' + id).then(data => {
        refs.form.elements.text.value = data.text;
        refs.form.elements.author.value = data.author;
        refs.form.elements.title.value = data.title;
        refs.form.elements.id.value = data.id;
    });
}
// function editPost(e) {
//   if (e.target.nodeName !== 'BUTTON') return;
//   const id = e.target.closest('li').dataset.id;
//   reqServer('/posts/' + id).then(data => {
//     refs.form.elements.text.value = data.text;
//     refs.form.elements.author.value = data.author;
//     refs.form.elements.title.value = data.title;
//     refs.form.elements.id.value = data.id;
//   });
// }

document.addEventListener("keydown", (e) => {
    if (e.code === 'Enter' && e.shiftKey) {
        console.log(refs.form.elements);

        const data = {
            text: refs.form.elements.text.value,
            author: refs.form.elements.author.value,
            title: refs.form.elements.title.value,
        }

        const updateForm = data => {
            refs.form.reset();
            refs.form.elements.id.value = "";
            renderPostList();
        }

        console.log(data);
        const id = refs.form.elements.id.value;
        if ( id === "") {
            reqServer('/posts', "POST", data).then(updateForm);
        } else {
            reqServer(`/posts/${id}`, "PATCH", data).then(updateForm);
        }
    }
});