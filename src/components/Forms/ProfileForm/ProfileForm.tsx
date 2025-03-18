"use client";
import { EditIcon } from "@/Icons";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import InputField from "@/components/FormComponents/InputField";
import CustomPageWrapper from "@/components/Wrappers/CustomPageWrapper";
import {
  useAppContext,
  useDispatchContext,
} from "@/provider/ContextProvider/ContextProvider";
import { useUploadPhoto } from "@/queries/Upload";
import { useUpdateUser } from "@/queries/user";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function ProfileForm() {
  const { userData } = useAppContext();
  const dispatch = useDispatchContext();
  const [tempCoverImgURL, setTempCoverImgURL] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: userData?.name || "",
    email: userData?.email || "",
    phone: userData?.phone || "",
    gender: userData?.gender || "",
    dob: userData?.dob || "",
  });

  useEffect(() => {
    if (userData?.id) {
      setFormData({
        name: userData?.name || "",
        email: userData?.email || "",
        phone: userData?.phone || "",
        gender: userData?.gender || "",
        dob: userData?.dob || "",
      });
    }
  }, [userData]);

  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { mutate: uploadPhoto } = useUploadPhoto();
  const { mutate: updateProfile } = useUpdateUser();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    if (profileImage) {
      const data = new FormData();
      data.append("file", profileImage);
      uploadPhoto(data as any, {
        onSuccess: (res) => {
          updateProfile(
            {
              ...formData,
              id: userData?.id,
              image: res?.data?.fileUrl,
            },
            {
              onSuccess: (data) => {
                setIsLoading(false);
                localStorage.AUTH = JSON.stringify(data?.data?.user);
                dispatch({ type: "SET_USER_DATA", payload: data?.data?.user });
                toast.success("Profile updated Successfully!!!");
              },
              onError: () => {
                setIsLoading(false);
                toast.error("Something went wrong!!!");
              },
            }
          );
        },
      });
      setTempCoverImgURL(null);
    } else {
      updateProfile(
        { ...formData, id: userData?.id },
        {
          onSuccess: (data) => {
            setIsLoading(false);
            localStorage.AUTH = JSON.stringify(data?.data?.user);
            dispatch({ type: "SET_USER_DATA", payload: data?.data?.user });
            toast.success("Profile updated Successfully!!!");
          },
          onError: () => {
            setIsLoading(false);
            toast.error("Something went wrong!!!");
          },
        }
      );
      setTempCoverImgURL(null);
    }
  };

  return (
    <CustomPageWrapper heading="Profile" className="relative">
      {/* <button className="absolute top-[6%] right-0 text-sm not-italic font-medium text-gradient">
        Delete Profile
      </button> */}
      <div className="flex justify-center  mb-6">
        <label className="rounded-full border-[4px] border-red-500 relative">
          <img
            src={tempCoverImgURL || userData?.image || "assets/profile.jpg"}
            className="rounded-full w-[160px] h-[160px]"
            alt="profile"
          />
          <input
            type="file"
            className="hidden"
            onChange={(e: any) => {
              const file = e?.target?.files[0] as any;
              if (file) {
                setProfileImage(file);
                setTempCoverImgURL(URL.createObjectURL(file));
              } else {
                setProfileImage(null);
                setTempCoverImgURL(null);
              }
            }}
          />
          <div className="absolute bottom-1 right-1 cursor-pointer">
            <EditIcon />
          </div>
        </label>
      </div>
      <div className="text-center mb-[59px]">
        <h2 className="text-black text-center text-2xl not-italic font-semibold mb-2">
          {userData?.name || "User Name"}
        </h2>
        <p className="text-black text-center text-base not-italic font-normal">
          {userData?.email || "User Email"}
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex gap-6 mb-6 max-[600px]:flex-col">
          <InputField
            className="flex-1"
            type="text"
            placeholder="Name"
            shadow={false}
            value={formData?.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <InputField
            className="flex-1"
            type="mobile"
            placeholder="Mobile no"
            value={formData?.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            shadow={false}
          />
        </div>
        <div className="flex gap-6 mb-6 max-[600px]:flex-col">
          <InputField
            className="flex-1"
            type="email"
            placeholder="Email"
            value={formData?.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            shadow={false}
          />
          <InputField
            className="flex-1"
            type="text"
            placeholder="Gender"
            value={formData?.gender}
            onChange={(e) =>
              setFormData({ ...formData, gender: e.target.value })
            }
            shadow={false}
          />
        </div>
        <div className="flex gap-6 max-[600px]:flex-col">
          <InputField
            className="flex-1"
            value={formData?.dob}
            onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
            type="date"
            placeholder="D.O.B"
            shadow={false}
          />
          <div className="flex-1"></div>
        </div>
        <div className="w-[300px] mx-auto mt-12 max-[600px]:w-full max-[600px]:mt-5 flex items-center justify-center">
          <PrimaryButton
            type="submit"
            label="Save Changes"
            loading={isLoading}
          />
        </div>
      </form>
    </CustomPageWrapper>
  );
}
