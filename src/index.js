import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

class CashAmount {
  constructor(amount) {
    this.amount = amount;
  }

  totalInPennies() {
    return this.amount * 100;
  }

  addDoubleAmount(otherAmount) {
    return (this.amount += otherAmount);
  }

  quantityOfEachDenomination() {
    let typeCount = {
      hundreds: 0,
      fifties: 0,
      twenties: 0,
      tens: 0,
      fives: 0,
      ones: 0,
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0
    };
  }
}
