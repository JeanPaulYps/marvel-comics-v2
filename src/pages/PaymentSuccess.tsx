import "../styles/PaymentSuccess.css";

function PaymentSuccess() {
  return (
    <div className="Payment">
      <img
        className="Payment__CheckIcon"
        src={`${process.env.PUBLIC_URL}/CheckIcon.svg`}
        alt=""
      />
      <p className="Payment__Callout">PAYMENT DONE</p>
      <p className="Payment__Text">Come back soon</p>
    </div>
  );
}

export { PaymentSuccess };
