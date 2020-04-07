const targetEl = document.querySelector("#butterfly");
const textEl = document.querySelector("#text");
const refObj = {};

targetEl.addEventListener("click", function () {
  addToRefObj(targetEl);
  console.log(refObj);
  textEl.setAttribute("text", "value", `Caught: ${refObj[targetEl.id]}`);

  targetEl.components.animation.attrValue.enabled = true;
});

const addToRefObj = (target) => {
  if (refObj[target.id]) {
    refObj[target.id] = refObj[target.id] + 1 || 0;
  } else {
    refObj[target.id] = 1;
  }
  return refObj;
};

//how to create new element on page!

// const newEntity = document.createElement("a-entity");
// newEntity.setAttribute("geometry", {
//   primitive: "box",
//   height: 3,
//   width: 1
// });
// targetEl.appendChild(newEntity);
