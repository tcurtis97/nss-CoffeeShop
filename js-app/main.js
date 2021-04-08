const url = "https://localhost:5001/api/beanvariety/";

const button = document.querySelector("#run-button");
button.addEventListener("click", () => {
  getAllBeanVarieties().then((beanVarieties) => render(beanVarieties));
  getAllCoffee().then((coffee) => {
    console.log(coffee);
  });
});

function getAllBeanVarieties() {
  return fetch(url).then((resp) => resp.json());
}

function getAllCoffee() {
  return fetch(Coffeeurl).then((resp) => resp.json());
}

const Coffeeurl = "https://localhost:5001/api/coffee/";

const contentTarget = document.querySelector(".beanvariety");
const render = (beanVarieties) => {
  const BeanVarieties = beanVarieties
    .map((v) => {
      return `
          <section>
              <div>Bean Name: ${v.name}</div>
              <div>Bean Region: ${v.region}</div>
              <div>Bean Notes: ${v.notes}</div>
          </section>`;
    })
    .join("");

  contentTarget.innerHTML = BeanVarieties;
};
