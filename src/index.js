document.getElementById("app").innerHTML = `
<h1>Hello Parcel!</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
<div>
  <h4>Console out promise all.</h4>
</div>
`;
const getFoo = async () => {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/3");
    let data = await response.json();
    console.log("Todos Data: ", data);
    return data;
  } catch (err) {
    console.error(err);
  }
};

const getBar = async () => {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/4");
    let data = await response.json();
    console.log("Posts Data: ", data);
    return data;
  } catch (err) {
    console.error(err);
  }
};

Promise.all([getFoo(), getBar()])
  .then(res => console.log("My Results: ", res))
  .catch(err => console.error(err));

const countHelper = myTask => {
  let bigNum = 0;
  let smallNum = 0;
  if (myTask === "big") {
    while (bigNum < 10000) {
      bigNum = bigNum + 1;
    }
  } else if (myTask === "small") {
    while (smallNum < 100) {
      smallNum = smallNum + 1;
    }
  }
  if (bigNum !== 0) {
    console.log("BIG result: ", bigNum);
    return bigNum;
  } else if (smallNum !== 0) {
    console.log("small result: ", smallNum);
    return smallNum;
  }
};

const bigCount = async () => {
  try {
    let data = await countHelper("big");

    return data;
  } catch (err) {
    console.error(err);
  }
};

const smallCount = async () => {
  try {
    let data = await countHelper("small");
    return data;
  } catch (err) {
    console.error(err);
  }
};

Promise.all([bigCount(), smallCount()])
  .then(res => console.log("My Count Results: ", res))
  .catch(err => console.error(err));
