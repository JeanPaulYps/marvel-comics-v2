import { PayPalButton, PayPalButtonProps } from "react-paypal-button-v2";

type PayPalProps = PayPalButtonProps & {onCancel: (...args: any[]) => any};

const BridgePayPalButton = (props: PayPalProps) =>  {
  return (
    <PayPalButton {...props} />
  )
}

export default BridgePayPalButton