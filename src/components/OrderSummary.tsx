import { Link } from "react-router-dom";

type Props = {
  total: number;
  totalItems: number;
};

function OrderSummary({ total, totalItems }: Props) {
  const roundedTotal = (Math.round(total * 100) / 100).toFixed(2);
  return (
    <div className="Summary">
      <Link className="BackToHome" to="/">
        <img src={`${process.env.PUBLIC_URL}/ArrowBack.svg`} alt="" />
        <span className="BackToHome__Text">Back to store</span>
      </Link>
      <div className="Summary__Container">
        <div className="Summary__ContainerTotal">
          <div className="Summary__Text">Total</div>
          <div className="Summary__Total">{roundedTotal}</div>
        </div>
        <div className="Summary__ItemsCount">{totalItems} items</div>
      </div>
    </div>
  );
}

export { OrderSummary };
