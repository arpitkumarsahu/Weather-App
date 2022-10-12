let container = document.getElementById("container");
async function getweather() {
  let city = document.getElementById("city").value;
  //    let res= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a642600f0384a5e34545d35d9502fde2&units=metric`);
  let res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=7&appid=a642600f0384a5e34545d35d9502fde2&units=metric`
  );
  let data = await res.json();

  appenddata(data);
  console.log("data:", data);
}

function appenddata(data) {
  container.innerHTML = null;
  let name = document.createElement("h3");
  name.innerText = `City:- ${data.city.name}`;
  // name.style.color="white"
  let sunrise = document.createElement("h3");
  sunrise.innerText = `🌅 Sunrise:-${data.city.sunrise}`;

  // sunrise.style.color="white"
  let div1 = document.createElement("div");
  let day1 = document.createElement("h2");
  day1.innerText = "Day 1";
  let list1 = document.createElement("p");
  list1.innerText = `1..☁ Temperature_min:-${data.list[0].main.temp_min}`;
  let list11 = document.createElement("p");
  list11.innerText = `1..Temperature_max:-${data.list[0].main.temp_max}`;
  div1.append(day1, list1, list11);

  let div2 = document.createElement("div");
  let day2 = document.createElement("h2");
  day2.innerText = "Day 2";
  let list2 = document.createElement("p");
  list2.innerText = `2..☁ Temperature_min:-${data.list[1].main.temp_min}`;
  let list22 = document.createElement("p");
  list22.innerText = `2..Temperature_max:-${data.list[1].main.temp_max}`;
  div2.append(day2, list2, list22);

  let div3 = document.createElement("div");
  let day3 = document.createElement("h2");
  day3.innerText = "Day 3";
  let list3 = document.createElement("p");
  list3.innerText = `3..☁ Temperature_min:-${data.list[1].main.temp_min}`;
  let list33 = document.createElement("p");
  list33.innerText = `3..Temperature_max:-${data.list[1].main.temp_max}`;
  div3.append(day3, list3, list33);

  let div4 = document.createElement("div");
  let day4 = document.createElement("h2");
  day4.innerText = "Day 4";
  let list4 = document.createElement("p");
  list4.innerText = `4..☁ Temperature_min:-${data.list[1].main.temp_min}`;
  let list44 = document.createElement("p");
  list44.innerText = `4..Temperature_max:-${data.list[1].main.temp_max}`;
  div4.append(day4, list4, list44);

  let div5 = document.createElement("div");
  let day5 = document.createElement("h2");
  day5.innerText = "Day 5";
  let list5 = document.createElement("p");
  list5.innerText = `5..☁ Temperature_min:-${data.list[1].main.temp_min}`;
  let list55 = document.createElement("p");
  list55.innerText = `5..Temperature_max:-${data.list[1].main.temp_max}`;
  div5.append(day5, list5, list55);

  let div6 = document.createElement("div");
  let day6 = document.createElement("h2");
  day6.innerText = "Day 6";
  let list6 = document.createElement("p");
  list6.innerText = `6..☁ Temperature_min:-${data.list[1].main.temp_min}`;
  let list66 = document.createElement("p");
  list66.innerText = `6..Temperature_max:-${data.list[1].main.temp_max}`;
  div6.append(day6, list6, list66);

  let iframe = document.createElement("iframe");
  iframe.src = `https://maps.google.com/maps?q=${data.city.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  container.append(name, sunrise, iframe);
  document
    .querySelector("#weather")
    .append(div1, div2, div3, div4, div5, div5, div6);
}
