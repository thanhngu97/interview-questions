const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");

const apiUrl = "https://jsonplaceholder.typicode.com/posts";

const AJAX = async function (url, uploadData) {
  try {
    const fetchPro = uploadData
      ? fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(uploadData),
        })
      : fetch(url);

    const res = await fetchPro;

    if (!res.ok) throw new Error("Something went wrong! 🪳🐔");

    const data = await res.json();
    console.log(data);

    return data;
  } catch (err) {
    console.log(err);
  }
};

const getAPI = AJAX.bind(null, apiUrl, undefined);
const postAPI = AJAX.bind(null, apiUrl, {
  userId: 11,
  id: Math.random(),
  title: "New Post",
  body: "This is a new post made by user",
});

getBtn.addEventListener("click", getAPI);
postBtn.addEventListener("click", postAPI);
