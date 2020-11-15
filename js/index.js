// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  let subTotal = product.querySelector('.subtotal span');
  subTotal.innerHTML = Number(price * quantity);
  let total = Number(price * quantity);
  return total;
}

function calculateAll() {
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);

  let totalValueNum = 0;

  const allProducts = document.querySelectorAll('.product');
  allProducts.forEach((product) => {
    updateSubtotal(product);
    totalValueNum += updateSubtotal(product);
  });

  const totalValueElement = document.querySelector('#total-value span');
  totalValueElement.innerText = totalValueNum;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
