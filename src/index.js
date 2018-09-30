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

// Promise.all([getFoo(), getBar()])
//   .then(res => console.log("My Results: ", res))
//   .catch(err => console.error(err));

const countHelper1 = num => {
  while(num < 10000){
    num = num + 1
  }
  return num
  
};

const countHelper2 = num => {
  while (num < 3) {
    num = num + 1
  }
  return num
};

  


class counter {
  constructor(num) {
    this.num = num;
  }
  bigRes(){
    setTimeout(()=>{
      this.num = 1000;
    }, 100)
    console.log('BIG: ', this.num)
    return this.num
  }
  smallRes(){
        this.num = this.num + 1;
    console.log('samll: ', this.num)
    return this.num
  }
}

const bigCount = async (num) => {
  try {
    // const countBig = new counter(0)
    // let data = await countBig.bigRes();
    let data = await countHelper1(num);
    console.log('b: ', data)
    return data;
  } catch (err) {
    console.error(err);
  }
};

const smallCount = async (num) => {
  try {
    // const countSmall = new counter(0)
    // let data = await countSmall.smallRes();
    let data = await countHelper2(num);
    console.log('s: ', data)
    return data;
  } catch (err) {
    console.error(err);
  }
};


Promise.all([bigCount(0), smallCount(0)])
  .then(res => {
    console.log("My Count Results: ", res)
    const total = res.reduce((acc, val) => {
      return acc + val
    }) 
    console.log(total) 
  })
  .catch(err => console.error(err));
