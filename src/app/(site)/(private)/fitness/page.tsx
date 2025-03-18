"use client";
import type { NextPage } from "next";
import Head from "next/head";
import { useState, useEffect } from "react";

// Define the structure of an Actor
interface Actor {
  name: string;
  images: string[];
  description: string;
}

// Define the structure of an AboutFitness item
interface AboutFitness {
  id: number;
  images: string[];
  description: string;
  actors: Actor[];
  createdAt: string;
  updatedAt: string;
}

const Fitness: NextPage = () => {
  // State for carousel image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // State for fetched aboutFitness data
  const [aboutFitnessData, setAboutFitnessData] = useState<AboutFitness[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch data from the GET /about-fitness API
  useEffect(() => {
    const fetchAboutFitness = async () => {
      try {
        const response = await fetch("https://bignlean.shellcode.cloud/about-fitness");
        const data = await response.json();

        console.log("API Response:", JSON.stringify(data, null, 2));

        if (data.status && Array.isArray(data.aboutFitnessList)) {
          setAboutFitnessData(data.aboutFitnessList);
        } else {
          setError("Failed to load fitness data");
        }
      } catch (err) {
        console.error("Error fetching about fitness data:", err);
        setError("An error occurred while fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchAboutFitness();
  }, []);

  // Carousel images (use actor images if top-level images are empty)
  const carouselImages = aboutFitnessData.length > 0
    ? (aboutFitnessData[0].images.length > 0
        ? aboutFitnessData[0].images
        : aboutFitnessData[0].actors.flatMap(actor => actor.images).filter(Boolean))
    : ["Image 1 Placeholder", "Image 2 Placeholder", "Image 3 Placeholder"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  // Function to handle dot clicks
  const handleDotClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  // Render loading or error states
  if (loading) {
    return <div className="min-h-screen bg-gray-100 flex items-center justify-center">Loading...</div>;
  }

  if (error) {
    return <div className="min-h-screen bg-gray-100 flex items-center justify-center text-red-600">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>All About Fitness</title>
        <meta name="description" content="A guide to a balanced diet and fitness" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-2xl mx-auto p-4">
        {/* Title */}
        <h1 className="text-2xl font-bold text-center my-4">ALL ABOUT FITNESS</h1>

        {/* Carousel */}
        <div className="relative h-48 rounded-lg mb-4 overflow-hidden">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex items-center justify-center bg-gray-300 transition-transform duration-500 ease-in ${
                currentImageIndex === index
                  ? "translate-x-0"
                  : currentImageIndex > index
                  ? "-translate-x-full"
                  : "translate-x-full"
              }`}
            >
              {typeof image === "string" && image.startsWith("http") ? (
                <img src={image} alt={`Carousel ${index}`} className="w-full h-full object-cover" />
              ) : (
                <span className="text-gray-500">{image}</span>
              )}
            </div>
          ))}
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center mb-6">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-3 w-3 rounded-full mx-1 ${
                currentImageIndex === index ? "bg-gray-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Intro Text */}
        <p className="text-gray-700 mb-6">
          {aboutFitnessData.length > 0
            ? aboutFitnessData[0].description
            : "A balanced diet can provide your body with the nutrients it needs to function optimally, while reducing your risk of developing chronic diseases such as heart disease, diabetes, and cancer. Here are some tips for creating a healthy and sustainable diet plan:"}
        </p>

        {/* Quote Sections (using actors array) */}
        {aboutFitnessData.length > 0 && aboutFitnessData[0].actors.slice(0, 4).map((actor, index) => (
          <div
            key={index}
            className={`flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-center mb-6`}
          >
            <div className="bg-gray-300 h-32 w-32 rounded-lg mr-4 mb-4 md:mb-0 flex items-center justify-center">
              {actor.images.length > 0 ? (
                <img src={actor.images[0]} alt={`${actor.name} image`} className="w-full h-full object-cover rounded-lg" />
              ) : (
                <span className="text-gray-500">Image Placeholder</span>
              )}
            </div>
            <div>
              <h2 className="text-red-600 font-semibold">{actor.name}</h2>
              <p className={`text-gray-700 ${index < 2 ? "italic" : ""}`}>
                {actor.description}
              </p>
            </div>
          </div>
        ))}

        {/* Large Image Placeholders */}
        {aboutFitnessData.length > 0 && aboutFitnessData[0].actors.length > 2 && (
          <div className="bg-gray-300 h-48 rounded-lg mb-4 flex items-center justify-center">
            {aboutFitnessData[0].actors[2].images.length > 0 ? (
              <img src={aboutFitnessData[0].actors[2].images[0]} alt="Large Image 1" className="w-full h-full object-cover" />
            ) : (
              <span className="text-gray-500">Image Placeholder</span>
            )}
          </div>
        )}

        {aboutFitnessData.length > 0 && aboutFitnessData[0].actors.length > 3 && (
          <div className="bg-gray-300 h-48 rounded-lg mb-4 flex items-center justify-center">
            {aboutFitnessData[0].actors[3].images.length > 0 ? (
              <img src={aboutFitnessData[0].actors[3].images[0]} alt="Large Image 2" className="w-full h-full object-cover" />
            ) : (
              <span className="text-gray-500">Image Placeholder</span>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default Fitness;