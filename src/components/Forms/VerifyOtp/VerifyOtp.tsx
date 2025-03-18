"use client";
import { useState } from "react";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import FormWrapper from "@/components/Wrappers/FormWrapper";
import OTPInput from "react-otp-input";

export default function VerifyOtp() {
  const [otp, setOtp] = useState("");
  return (
    <FormWrapper label="Verify Otp" privacy={true}>
      <div>
        <h3 className="text-gray-500 text-center text-sm not-italic font-normal">
          We have sent and OTP to the Number
        </h3>
        <p className="text-black text-center text-sm not-italic font-normal">
          +91 77385 46983
        </p>
      </div>
      <form className="flex flex-col gap-[22px] w-[85%] mx-auto mt-[28px]">
        <OTPInput
          containerStyle={{ justifyContent: "center", gap: "25px" }}
          value={otp}
          onChange={setOtp}
          numInputs={4}
          renderInput={(props) => (
            <input
              {...props}
              className="outline-none text-center  sm-3 text-black rounded-lg"
              style={{ width: "60px", height: "60px" }}
            />
          )}
        />
        <PrimaryButton
          className="w-[350px] mx-auto mt-[22px] max-[550px]:w-full"
          type="submit"
          label="Verify otp"
        />
      </form>
      <p className="text-gray-500 text-center text-sm not-italic font-normal mt-5">
        Resend Otp:<span className="text-red-700">58s</span>
      </p>
    </FormWrapper>
  );
}
