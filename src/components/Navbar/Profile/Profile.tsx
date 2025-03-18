"use client";
import {
  AuthencityIcon,
  CertificateIcon,
  FaqIcon,
  MyOrderIcon,
  ReferIcon,
  ReviewsIcon,
  WalletIcon,
} from "@/Icons";
import {
  useAppContext,
  useDispatchContext,
} from "@/provider/ContextProvider/ContextProvider";
import { logout } from "@/queries/Auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

type ProfileOption = {
  link: string;
  label: string;
  icon: ReactNode;
};
const profileOptions: ProfileOption[] = [
  { icon: <MyOrderIcon />, label: "My Orders", link: "/track-order" },
  { icon: <WalletIcon />, label: "Wallet", link: "/wallet" },
  { icon: <ReferIcon />, label: "Refer a Friend", link: "/refer-friend" },
  { icon: <ReviewsIcon />, label: "My Reviews", link: "/reviews" },
  { icon: <AuthencityIcon />, label: "Authenticity", link: "/authenticity" },
  { icon: <FaqIcon />, label: "FAQs", link: "/faq" },
  {
    icon: <CertificateIcon />,
    label: "Certificates",
    link: "/app-certificates",
  },
];

export default function Profile() {
  const { profileToggle, userData } = useAppContext();
  const dispatch = useDispatchContext();
  const router = useRouter();
  return (
    <div className="relative">
      <div
        onClick={() =>
          dispatch({
            type: profileToggle ? "PROFILE_TOGGLE_OFF" : "PROFILE_TOGGLE_ON",
          })
        }
        className="flex items-center gap-2 cursor-pointer"
      >
        <img
          src={userData?.image || "/assets/profile.jpg"}
          alt="avatar"
          className="object-cover object-center w-10 h-10 rounded-full"
        />
        <p className=" not-italic font-semibold whitespace-nowrap">
          {userData ? userData?.name || "User" : "Sign in"}
        </p>
      </div>
      {profileToggle && (
        <div
          onMouseLeave={() => dispatch({ type: "PROFILE_TOGGLE_OFF" })}
          className="absolute w-[320px] sm-1 top-full right-0 bg-white rounded-xl p-4 translate-y-2 z-[10000000]"
        >
          {userData && (
            <div
              onClick={() => router.push("/profile")}
              className="flex gap-4 items-center mb-5 cursor-pointer"
            >
              <img
                src={userData?.image || "/assets/profile.jpg"}
                alt="avatar"
                className="object-fill w-12 h-12 rounded-full aspect-square"
              />
              <div>
                <p className="text-gray-900 text-base not-italic font-semibold">
                  {userData?.name || "User Name"}
                </p>
                <p className="text-sm text-gray-900 opacity-70 not-italic font-normal">
                  {userData?.email || "User Email"}
                </p>
              </div>
            </div>
          )}

          <div className="flex flex-col gap-5">
            {profileOptions.map((option, index) => (
              <Link
                key={index}
                className="flex items-center gap-3"
                href={option.link}
              >
                <span>{option.icon}</span>
                {option.label}
              </Link>
            ))}
          </div>
          {userData && (
            <button
              onClick={logout}
              className="mt-8 ml-5 text-lg not-italic font-semibold text-gradient"
            >
              Logout
            </button>
          )}
          {!userData && (
            <button
              onClick={() => router.push("/login")}
              className="mt-8 ml-5 text-lg not-italic font-semibold text-gradient"
            >
              Sign In
            </button>
          )}
        </div>
      )}
    </div>
  );
}
