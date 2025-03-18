"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import HeightSlider from './CustomeHeightSlider';
import WeightSlider from './WeightSlider';

const BMRPage: React.FC = () => {
  const [gender, setGender] = useState<'female' | 'male'>('female');
  const [height, setHeight] = useState<number>(161); // Default to your provided height
  const [weight, setWeight] = useState<number>(67); // Default to your provided weight
  const [bmr, setBmr] = useState<number | null>(null);
  const [age, setAge] = useState<number>(30);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  useEffect(() => {
    console.log("Current Height:", height, "Current Weight:", weight);
  }, [height, weight]);

  const calculateBMR = () => {
    setIsClicked(true);
    if (height && weight && age) {
      let bmrValue: number;
      if (gender === 'male') {
        bmrValue = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
      } else {
        bmrValue = 447.593 + 9.247 * weight + 3.098 * height - 4.330 * age;
      }
      setBmr(Math.round(bmrValue));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 space-y-6">
        <h1 className="text-2xl max-[320px]:text-xl font-bold text-center text-black">Basal Metabolic Rate</h1>

        {!isClicked ? (
          <>
            <p className="text-sm text-base text-justify bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(to right, #E70F0F, #FF5F5F)' }}>
              The basal metabolic rate (BMR) is the amount of energy needed while resting in a neutral
              environment when the digestive system is inactive.
            </p>

            <div className="flex justify-center gap-4">
              <div
                className={`flex flex-col items-center cursor-pointer p-4 rounded-lg transition duration-200 ${
                  gender === 'female' ? 'bg-pink-100 border-2 border-pink-500' : 'bg-gray-50'
                }`}
                onClick={() => setGender('female')}
              >
                <Image
                  src={"/assets/bmr/Female.png"}
                  alt="Female"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <span className="mt-2 text-base font-medium bg-clip-text text-transparent"
                  style={{ backgroundImage: 'linear-gradient(to right, #E70F0F, #FF5F5F)' }}>
                  Female
                </span>
              </div>

              <div
                className={`flex flex-col items-center cursor-pointer p-4 rounded-lg transition duration-200 ${
                  gender === 'male' ? 'bg-blue-100 border-2 border-blue-500' : 'bg-gray-50'
                }`}
                onClick={() => setGender('male')}
              >
                <Image
                  src={"/assets/bmr/Male.png"}
                  alt="Male"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <span className="mt-2 text-base font-medium bg-clip-text text-transparent"
                  style={{ backgroundImage: 'linear-gradient(to right, #E70F0F, #FF5F5F)' }}>
                  Male
                </span>
              </div>
            </div>

            <div className='flex flex-row items-center'>
              <div>
                <Image src={"/assets/bmr/Height-img.png"} alt="Height Logo" width={50} height={50} />
                <label
                  className="block bg-clip-text text-transparent"
                  style={{ backgroundImage: 'linear-gradient(to right, #E70F0F, #FF5F5F)' }}
                >
                  <span className='text-sm font-bold'>Height</span>
                  <span className='text-xs font-medium'> cm</span>
                </label>
              </div>
              <HeightSlider value={height} onHeightChange={setHeight} />
            </div>

            <div className='flex flex-row items-center'>
              <div>
                <Image src={"/assets/bmr/Weight-img.png"} alt="Weight Logo" height={50} width={50} />
                <label
                  className="block bg-clip-text text-transparent"
                  style={{ backgroundImage: 'linear-gradient(to right, #E70F0F, #FF5F5F)' }}
                >
                  <span className='text-sm font-bold'>Weight</span>
                  <span className='text-xs font-medium'> kg</span>
                </label>
              </div>
              <WeightSlider value={weight} onWeightChange={setWeight} />
            </div>
          </>
        ) : (
          <div className="text-center">
            <p className="text-lg font-semibold text-gray-800">
              <p className="mt-[69px]" style={{
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "30px",
                textAlign: "center",
              }}>
                Your BMR result is
              </p>
              <br />
              <p>
                <span
                  className="bg-clip-text text-transparent mt-[12px]"
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 700,
                    fontSize: "54px",
                    backgroundImage: 'linear-gradient(to right, #E70F0F, #FF5F5F)'
                  }}
                >
                  {bmr}
                </span>
                <br />
                <span style={{
                  fontFamily: "Poppins",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "30px",
                  textAlign: "center",
                }}>
                  calories/day
                </span>
              </p>
              <br />
              <p style={{
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "100%",
                textAlign: "center",
              }}>
                Adult man: <span className="bg-clip-text text-transparent" style={{
                  backgroundImage: 'linear-gradient(to right, #E70F0F, #FF5F5F)'
                }}>1600</span> Kcal/day
                <br />Adult woman: <span className="bg-clip-text text-transparent" style={{
                  backgroundImage: 'linear-gradient(to right, #E70F0F, #FF5F5F)'
                }}>1400</span> Kcal/day
              </p>
              <br />
              <p style={{
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "100%",
                textAlign: "center",
                padding: "0px 20px",
              }}>
                A BMR value between -15% and +20% is considered normal.
              </p>
            </p>
          </div>
        )}

        <button
          onClick={calculateBMR}
          className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-200"
        >
          {!isClicked ? "Calculate your BMR" : "Home"}
        </button>
      </div>
    </div>
  );
};

export default BMRPage;