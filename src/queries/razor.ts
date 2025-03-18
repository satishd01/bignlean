import { placeOrder } from "@/queries/Order";

export const initializeRazorpay = () => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";

    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };

    document.body.appendChild(script);
  });
};

export const makePayment = async ({
  payload,
  amount,
}: {
  payload: {
    userid: number;
    addressid: number;
    paymentMethod: string;
    transactionId: string | null;
    bglCash: number;
  };
  amount: number;
}) => {
  const res = await initializeRazorpay();

  if (!res) {
    alert("Razorpay Failed to load");
    return;
  }

  let options = {
    key: process.env.NEXT_PUBLIC_RAZOR_PAY_KEY,
    name: "Bignlean pvt ltd.",
    currency: "INR",
    amount: amount,
    handler: async function (response: any) {
      const data = await placeOrder({
        ...payload,
        transactionId: response.razorpay_payment_id,
      });
      data.data;
    },
  };
  //@ts-ignore
  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};
