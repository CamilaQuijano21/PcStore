function CalculateSaleValue(purchaseValue, profit, ivaPercentage) {
    profit = profit / 100;
    ivaPercentage = ivaPercentage / 100;
    var iva = purchaseValue * ivaPercentage;
    var profitValue = purchaseValue * profit;
    var saleValue = parseFloat(purchaseValue) + parseFloat(iva) + parseFloat(profitValue);
    return [saleValue, profitValue];
  }