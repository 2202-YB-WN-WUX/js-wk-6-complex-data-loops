let takeaways = [
  {
    id: 0,
    name:"KFC",
    description: "phat buckets",
    food_served: "chicken",
    // the details property conatins an object
    details: {
      info: "How does it taste?",
      list: ["1","2","3","4"]
    }
  },
  {
    id: 1,
    name:"McDonalds",
    description: "free wi-fi",
    food_served: "burger, chips"
  },
  {
    id: 3,
    name:"Tommy Millions",
    description: "phat pizzas",
    food_served: "pizzas",
    details: {
      info: "They're gone",
      list: ["List item 1", "List item 2", "List item 3"]
      }
  }
];
const result = document.getElementById('result');


for (let i = 0; i < takeaways.length; i++) {
  if (takeaways[i].details) {
    // everything in this if statement will run on a paticular
    // takeaway which has details

    // console.log("We found some details..");
    // console.log("On the following restaurant");
    // console.log(takeaways[i]);
    let detailsList = [];

    for (let l = 0; l < takeaways[i].details.list.length; l++) {
      // console.log(takeaways[i].details.list[l]);
      detailsList.push(`
        <li class="list-item">${takeaways[i].details.list[l]}</li>
        `
      )
    }
    result.innerHTML += `
    <div class="box">
      <h1>${takeaways[i].name}</h1>
      <p>${takeaways[i].description}</p>
      <p>Food served: ${takeaways[i].food_served}</p>
      <p>Info: ${takeaways[i].details.info}</p>
      <ul class="details">
      ${detailsList.join("")}
      </ul>
    </div>
    `
    // console.log(detailsList);
  } else {
    result.innerHTML += `
    <div class="box">
      <h1>${takeaways[i].name}</h1>
      <p>${takeaways[i].description}</p>
      <p>Food served: ${takeaways[i].food_served}</p>
    </div>
    `
  }

  // result.innerHTML += `
  // <div class="box">
  //   <h1>${takeaways[i].name}</h1>
  //   <p>${takeaways[i].description}</p>
  //   <p>Food served: ${takeaways[i].food_served}</p>
  //   <div class="details">
  //   ${takeaways[i].details}
  //   </div>
  // </div>
  // `
}
