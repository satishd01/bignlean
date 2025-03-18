"use client";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import InputField from "@/components/FormComponents/InputField";
import FormWrapper from "@/components/Wrappers/FormWrapper";
import { loginUser } from "@/queries/Auth";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "@/utils/firebaseConfig";
import { toast } from "react-toastify";
import { useDispatchContext } from "@/provider/ContextProvider/ContextProvider";

interface CustomWindow extends Window {
  recaptchaVerifier?: any;
  recaptchaResponse?: string;
  grecaptcha?: any;
}

declare var window: CustomWindow;

export default function LoginForm() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isLoginSuccess, setIsLoginSuccess] = useState<boolean>(false);
  const [confirmResult, setConfirmResult] = useState<any>(null);
  const dispatch = useDispatchContext();
  const [disable, setDisable] = useState(false);
  const [verifyingOtp, setVerifyingOtp] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "normal",
          callback: (response: any) => {
            window.recaptchaResponse = response;
          },
          "expired-callback": () => {
            window.recaptchaResponse = "";
            toast.error("Captcha expired. Please verify again.");
          },
        }
      );
    }
  }, [auth]);

  const handleCaptchaAndSendOtp = async () => {
    if (!phone || phone.length < 10) {
      toast.error("Please enter a valid phone number.");
      setDisable(false);
      return;
    }

    try {
      if (!window.recaptchaResponse) {
        window?.recaptchaVerifier.render().then(function (widgetId: any) {
          window?.grecaptcha.reset(widgetId);
        });
        await window?.recaptchaVerifier.verify();
      }

      const confirmation = await signInWithPhoneNumber(
        auth,
        "+91" + phone,
        window.recaptchaVerifier
      );
      setConfirmResult(confirmation);
      setIsOtpSent(true);
    } catch (error) {
      toast.error("Failed to send OTP. Please try again.");
      setDisable(false);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setDisable(true);
    await handleCaptchaAndSendOtp();
  };

  const handleOtpHandler = async (e: any) => {
    e.preventDefault();
    setDisable(false);
    setVerifyingOtp(true);

    try {
      const result = await confirmResult.confirm(otp);
      const res = await loginUser(JSON.stringify({ phone }));
      const user = await res.json();

      if (res.ok && user) {
        toast.success("Login Successfully!!!");
        dispatch({ type: "SET_USER_DATA", payload: user.user });
        setIsLoginSuccess(true);
        localStorage.setItem("AUTH", JSON.stringify(user.user));
        setVerifyingOtp(false);
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      setVerifyingOtp(false);
      toast.error("Invalid OTP or something went wrong.");
    }
  };

  useEffect(() => {
    if (isLoginSuccess) {
      redirect("/");
    }
  }, [isLoginSuccess]);

  return (
    <>
      {!isOtpSent && (
        <FormWrapper
          label="Welcome Back"
          link={{
            link: "/register",
            linkLabel: "Sign Up",
            linkName: "Don't have an account?",
          }}
        >
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 w-[85%] mx-auto max-[550px]:w-[95%]"
          >
            <InputField
              type="mobile"
              placeholder="Mobile Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <div id="recaptcha-container"></div>
            <PrimaryButton
              type="submit"
              loading={disable}
              disable={disable || phone.length === 0}
              className="w-[80%] mx-auto  max-[550px]:w-full"
              label="Send otp"
            />
          </form> 
          {/* OR Separator */}
          <div className="flex items-center justify-center mb-0 mt-4">
            <hr className="w-1/4 border-gray-300" />
            <span className="mx-2 text-gray-500">or</span>
            <hr className="w-1/4 border-gray-300" />
          </div>
          {/* Social Login Icons */}
          <div className="flex justify-center space-x-4 mb-[10px]">
            {/* Facebook Icon */}
            <button
              className="w-[70px] h-[70px] md:w-[50px] md:h-[50px] sm:w-[40px] sm:h-[40px] bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition duration-200"
              style={{ boxShadow: '5px 4px 15px 0px #3333330D' }}
            >
              <svg
                className="w-6 h-6 md:w-5 md:h-5 sm:w-4 sm:h-4"
                viewBox="0 0 24 24"
                fill="#1877F2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v4.8c4.56-.93 8-4.96 8-9.8z" />
              </svg>
            </button>

            {/* Google Icon */}
            <button
              className="w-[70px] h-[70px] md:w-[50px] md:h-[50px] sm:w-[40px] sm:h-[40px] bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition duration-200"
              style={{ boxShadow: '5px 4px 15px 0px #3333330D' }}
            >
              <svg
                className="w-6 h-6 md:w-5 md:h-5 sm:w-4 sm:h-4"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.34-1.36-.34-2.09s.12-1.43.34-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
            </button>
          </div>
        </FormWrapper>
      )}

      {isOtpSent && (
        <FormWrapper label="Verify Otp" privacy={true}>
          <div>
            <h3 className="text-gray-500 text-center text-sm not-italic font-normal">
              We have sent and OTP to the Number
            </h3>
            <p className="text-black text-center text-sm not-italic font-normal">
              {phone}
            </p>
          </div>
          <form
            onSubmit={handleOtpHandler}
            className="flex p-3 flex-col gap-[22px] w-[85%]  mx-auto mt-[28px]"
          >
            <OTPInput
              containerStyle={{ justifyContent: "center", gap: "20px" }}
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderInput={(props) => (
                <input
                  {...props}
                  className="outline-none text-center  sm-3 !w-14 !h-14 max-sm:!w-8 max-sm:!h-8 border aspect-square text-black rounded-lg"
                />
              )}
            />
            <PrimaryButton
              className="w-[80%] mx-auto  max-[550px]:w-full"
              type="submit"
              label="Verify otp"
              loading={verifyingOtp}
            />
          </form>
        </FormWrapper>
      )}
    </>
  );
}
