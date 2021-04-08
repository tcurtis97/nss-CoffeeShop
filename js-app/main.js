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

const eventHub = document.querySelector(".container");
eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "saveBean") {
    // need to gather the data from the form
    const Name = document.querySelector("#BeanName").value;
    const Region = document.querySelector("#BeanRegion").value;
    const Note = document.querySelector("#BeanNote").value;

    // Make a new object representation of a note
    const newBean = {
      Name: Name,
      Region: Region,
      Note: Note,

      // Key/value pairs here
    };

    // Change API state and application state
    saveBean(newBean);
  }
});

const saveBean = (bean) => {
  const stringifiedObj = JSON.stringify(bean);
  return fetch("https://localhost:5001/api/beanvariety/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: stringifiedObj,
  });
};
