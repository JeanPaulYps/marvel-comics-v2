import { PayPalButton } from "react-paypal-button-v2";
import type { PayPalButtonProps } from "react-paypal-button-v2";

type PayPalProps = PayPalButtonProps & { onCancel: (...args: any[]) => any };

const BridgePayPalButton = (props: PayPalProps) => <PayPalButton {...props} />;

export { BridgePayPalButton };
