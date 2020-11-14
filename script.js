const checkbox = document.getElementById("toggler");
const prices = document.querySelectorAll("strong");
const annualDiscount = document.querySelectorAll(".annual");

const handleClick = (e) => {
  annualDiscount.forEach((el) => {
    el.classList.toggle("annual");
  });
  e.target.checked
    ? prices.forEach((price) => {
        const annualPrice = `$${
          parseInt(price.innerText.slice(1)).toFixed() * 10
        }.99`;
        price.innerText = annualPrice;
      })
    : prices.forEach((price) => {
        const monthlyPrice = `$${
          parseInt(price.innerText.slice(1)).toFixed() / 10
        }.99`;
        price.innerText = monthlyPrice;
      });
};

checkbox.addEventListener("click", handleClick);
