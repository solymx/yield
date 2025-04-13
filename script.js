function calculate() {
  const price = parseFloat(document.getElementById("price").value);
  const cashDividend = parseFloat(document.getElementById("cashDividend").value);
  const stockDividend = parseFloat(document.getElementById("stockDividend").value);

  if (isNaN(price) || price <= 0) {
    alert("請輸入正確的股價");
    return;
  }

  // 除息後價格
  const afterDividendPrice = price - cashDividend;

  // 除權息後價格
  const exDividendPrice = afterDividendPrice / (1 + stockDividend / 10);

  // 股票股利價值（假設 1 張股數 = 10 股）
  const stockValue = exDividendPrice * stockDividend;
  const totalValue = stockValue + (cashDividend * 10);
  const yieldRate = (totalValue / (price * 10)) * 100;

  document.getElementById("cashYield").textContent = (cashDividend / price * 100).toFixed(2);
  document.getElementById("exDividendPrice").textContent = exDividendPrice.toFixed(2);
  document.getElementById("yieldRate").textContent = yieldRate.toFixed(2);
}
