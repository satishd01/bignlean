"use client";
import { QualityIcon } from "@/Icons";
import CustomPageWrapper from "@/components/Wrappers/CustomPageWrapper";

const brandsSrcs = [
  "/assets/brands/img1.png",
  "/assets/brands/img2.png",
  "/assets/brands/img3.png",
  "/assets/brands/img4.png",
  "/assets/brands/img5.png",
];

const featureList = [
  {
    heading: `Quality Control During Distribution`,
    subHeading: `MuscleBlaze is one of the best selling brands in India. When it comes to healthy, top quality and reasonable supplements. From whey protein, mass gainers, BCAA's to raw whey protein, MuscleBlaze has everything to complement your fitness`,
  },
  {
    heading: `We Ensure That Damaged Products are not Shipped`,
    subHeading: `MuscleBlaze is one of the best selling brands in India. When it comes to healthy, top quality and reasonable supplements. From whey protein, mass gainers, BCAA's to raw whey protein, MuscleBlaze has everything to complement your fitness`,
  },
  {
    heading: `Premium logistic Partners`,
    subHeading: `MuscleBlaze is one of the best selling brands in India. When it comes to healthy, top quality and reasonable supplements. From whey protein, mass gainers, BCAA's to raw whey protein, MuscleBlaze has everything to complement your fitness.`,
  },
];

export default function page() {
  return (
    <CustomPageWrapper heading="Authenticity">
      <h2 className="text-black text-2xl not-italic font-semibold leading-9">
        Authenticity Of the Product
      </h2>
      <p className="text-black text-base not-italic font-normal leading-6 mb-[53px]">
        MuscleBlaze is one of the best selling brands in India. When it comes to
        healthy, top quality and reasonable supplements. From whey protein, mass
        gainers, BCAA's to raw whey protein, MuscleBlaze has everything to
        complement your fitness
      </p>
      <h2 className="text-black text-2xl not-italic font-medium mb-8">
        Brand Collaboration
      </h2>
      <p className="text-black text-base not-italic font-normal leading-6 mb-[53px]">
        Establishing direct brand collaborations is a cornerstone of our
        commitment to ensuring the authenticity and quality of the supplements
        offered on our platform. By directly partnering with reputable brands
        and manufacturers, we bypass intermediary distributors, reducing the
        risk of counterfeit or fake products entering our inventory. This
        collaboration allows us to maintain a close relationship with these
        brands, gaining access to their official supply chains and authorized
        products. By sourcing directly from these trusted partners, we guarantee
        that the supplements available on our platform are genuine, meeting the
        highest standards of quality, purity, and efficacy. Our dedication to
        fostering direct relationships with brands not only ensures the
        authenticity of the products but also enables us to stay updated with
        the latest formulations, innovations, and scientific advancements in the
        health supplement industry. This, in turn, empowers us to offer our
        customers the most reliable and cutting-edge products available. We take
        immense pride in our direct brand collaborations, as they form the
        foundation of our commitment to delivering only authentic and
        superior-quality health supplements to our valued customers. This
        collaboration reinforces our mission to prioritize your health and
        well-being by providing you with products you can trust without
        compromise.
      </p>
      <div className="flex gap-8 mb-[73px] flex-wrap">
        {brandsSrcs.map((src, index) => (
          <BrandsCard key={index} src={src} />
        ))}
      </div>
      <div className="flex flex-col gap-10 mb-[50px]">
        {featureList.map((item, index) => (
          <FeatureCard
            key={index}
            heading={item?.heading}
            subHeading={item.subHeading}
          />
        ))}
      </div>
      <h2 className="text-black text-xl not-italic font-semibold leading-9 mb-5">
        Duplicate Products Can Cause Various types of Organ Failure
      </h2>
      <p className="text-black text-base not-italic font-normal leading-7">
        Spurious ingredients mixed with steroids' make for cheap supplements.
        Such supplements are made to look like their real counterparts in color
        and texture.
      </p>
      <p className="text-black text-base not-italic font-normal leading-7">
        but the pump in muscle and the mass gain are directly because of the
        steroids in the Fake supplements. As for the permanent damage, you can
        get Cancer and severe impotence without smoking, skin diseases and
        rashes without being infected.
      </p>
      <p className="text-black text-base not-italic font-normal leading-7">
        kidney and liver damage without consuming alcohol. hormonal imbalance
        without having Stress, mood swings, hair loss and permanent organ
        damage.
      </p>
      <p className="text-black py-3 text-base not-italic font-normal leading-7">
        That's what anabolic steroids' do in a nutshell.
      </p>
      <p className="text-black py-3 text-base not-italic font-normal leading-7">
        Duplicate Supplements Or Fake Supplements Can Lead Many Health Problems.{" "}
      </p>
      <div className="flex items-center gap-5 pt-5">
        <svg
          width="90"
          height="66"
          viewBox="0 0 90 66"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M67.8908 17.5932L65.4301 20.7513C64.6861 14.5481 62.0541 11.2776 59.7648 9.64286C56.4456 7.21799 52.0395 6.65415 46.9466 7.8948C44.3715 3.21438 39.336 0 33.5558 0C25.1438 0 18.334 6.71059 18.334 15C18.334 23.2894 25.1438 30 33.5558 30C41.9108 29.9432 48.7775 23.233 48.7775 14.9436C48.7775 14.0415 48.663 13.1391 48.5485 12.293C51.2382 11.6727 54.4998 11.6163 56.9604 13.3644C59.0207 14.8867 60.3365 17.5937 60.7374 21.3156L57.5326 18.8907L54.6143 22.6126L64.228 29.8871L71.6673 20.4131L67.8908 17.5932ZM33.4992 25.2624C27.7196 25.2624 23.0264 20.6384 23.0264 14.9432C23.0264 9.24786 27.7188 4.62302 33.4992 4.62302C39.2787 4.62302 43.9719 9.247 43.9719 14.9432C43.9719 20.6385 39.2795 25.2624 33.4992 25.2624Z"
            fill="black"
          />
          <path
            d="M1.504 60V48.8H3.584V60H1.504ZM17.2054 51.36C17.888 51.36 18.4907 51.4933 19.0134 51.76C19.5467 52.0267 19.9627 52.4373 20.2614 52.992C20.56 53.536 20.7094 54.24 20.7094 55.104V60H18.7094V55.36C18.7094 54.6027 18.544 54.0373 18.2134 53.664C17.8827 53.2907 17.408 53.104 16.7894 53.104C16.352 53.104 15.9627 53.2 15.6214 53.392C15.2907 53.584 15.0294 53.8667 14.8374 54.24C14.656 54.6133 14.5654 55.088 14.5654 55.664V60H12.5654V55.36C12.5654 54.6027 12.4 54.0373 12.0694 53.664C11.7387 53.2907 11.264 53.104 10.6454 53.104C10.208 53.104 9.81871 53.2 9.47738 53.392C9.14671 53.584 8.88538 53.8667 8.69338 54.24C8.51204 54.6133 8.42138 55.088 8.42138 55.664V60H6.42138V51.456H8.32538V53.728L7.98938 53.056C8.27738 52.5013 8.69338 52.08 9.23738 51.792C9.79204 51.504 10.4214 51.36 11.1254 51.36C11.9254 51.36 12.6187 51.5573 13.2054 51.952C13.8027 52.3467 14.1974 52.944 14.3894 53.744L13.6054 53.472C13.8827 52.832 14.3414 52.32 14.9814 51.936C15.6214 51.552 16.3627 51.36 17.2054 51.36ZM28.0011 60.112C27.3078 60.112 26.6731 59.952 26.0971 59.632C25.5318 59.312 25.0785 58.832 24.7371 58.192C24.4065 57.5413 24.2411 56.72 24.2411 55.728C24.2411 54.7253 24.4011 53.904 24.7211 53.264C25.0518 52.624 25.4998 52.1493 26.0651 51.84C26.6305 51.52 27.2758 51.36 28.0011 51.36C28.8438 51.36 29.5851 51.5413 30.2251 51.904C30.8758 52.2667 31.3878 52.7733 31.7611 53.424C32.1451 54.0747 32.3371 54.8427 32.3371 55.728C32.3371 56.6133 32.1451 57.3867 31.7611 58.048C31.3878 58.6987 30.8758 59.2053 30.2251 59.568C29.5851 59.9307 28.8438 60.112 28.0011 60.112ZM23.2651 63.104V51.456H25.1691V53.472L25.1051 55.744L25.2651 58.016V63.104H23.2651ZM27.7771 58.4C28.2571 58.4 28.6838 58.2933 29.0571 58.08C29.4411 57.8667 29.7451 57.5573 29.9691 57.152C30.1931 56.7467 30.3051 56.272 30.3051 55.728C30.3051 55.1733 30.1931 54.6987 29.9691 54.304C29.7451 53.8987 29.4411 53.5893 29.0571 53.376C28.6838 53.1627 28.2571 53.056 27.7771 53.056C27.2971 53.056 26.8651 53.1627 26.4811 53.376C26.0971 53.5893 25.7931 53.8987 25.5691 54.304C25.3451 54.6987 25.2331 55.1733 25.2331 55.728C25.2331 56.272 25.3451 56.7467 25.5691 57.152C25.7931 57.5573 26.0971 57.8667 26.4811 58.08C26.8651 58.2933 27.2971 58.4 27.7771 58.4ZM38.0739 60.112C37.1992 60.112 36.4205 59.9253 35.7379 59.552C35.0552 59.168 34.5165 58.6453 34.1219 57.984C33.7272 57.3227 33.5299 56.5707 33.5299 55.728C33.5299 54.8747 33.7272 54.1227 34.1219 53.472C34.5165 52.8107 35.0552 52.2933 35.7379 51.92C36.4205 51.5467 37.1992 51.36 38.0739 51.36C38.9592 51.36 39.7432 51.5467 40.4259 51.92C41.1192 52.2933 41.6579 52.8053 42.0419 53.456C42.4365 54.1067 42.6339 54.864 42.6339 55.728C42.6339 56.5707 42.4365 57.3227 42.0419 57.984C41.6579 58.6453 41.1192 59.168 40.4259 59.552C39.7432 59.9253 38.9592 60.112 38.0739 60.112ZM38.0739 58.4C38.5645 58.4 39.0019 58.2933 39.3859 58.08C39.7699 57.8667 40.0685 57.5573 40.2819 57.152C40.5059 56.7467 40.6179 56.272 40.6179 55.728C40.6179 55.1733 40.5059 54.6987 40.2819 54.304C40.0685 53.8987 39.7699 53.5893 39.3859 53.376C39.0019 53.1627 38.5699 53.056 38.0899 53.056C37.5992 53.056 37.1619 53.1627 36.7779 53.376C36.4045 53.5893 36.1059 53.8987 35.8819 54.304C35.6579 54.6987 35.5459 55.1733 35.5459 55.728C35.5459 56.272 35.6579 56.7467 35.8819 57.152C36.1059 57.5573 36.4045 57.8667 36.7779 58.08C37.1619 58.2933 37.5939 58.4 38.0739 58.4ZM47.7624 60.112C46.8237 60.112 46.0984 59.872 45.5864 59.392C45.0744 58.9013 44.8184 58.1813 44.8184 57.232V49.568H46.8184V57.184C46.8184 57.5893 46.9197 57.904 47.1224 58.128C47.3357 58.352 47.629 58.464 48.0024 58.464C48.4504 58.464 48.8237 58.3467 49.1224 58.112L49.6824 59.536C49.4477 59.728 49.1597 59.872 48.8184 59.968C48.477 60.064 48.125 60.112 47.7624 60.112ZM43.4104 53.12V51.52H49.1064V53.12H43.4104ZM55.0624 60.112C54.113 60.112 53.281 59.9253 52.5664 59.552C51.8624 59.168 51.313 58.6453 50.9184 57.984C50.5344 57.3227 50.3424 56.5707 50.3424 55.728C50.3424 54.8747 50.529 54.1227 50.9024 53.472C51.2864 52.8107 51.809 52.2933 52.4704 51.92C53.1424 51.5467 53.905 51.36 54.7584 51.36C55.5904 51.36 56.3317 51.5413 56.9824 51.904C57.633 52.2667 58.145 52.7787 58.5184 53.44C58.8917 54.1013 59.0784 54.88 59.0784 55.776C59.0784 55.8613 59.073 55.9573 59.0624 56.064C59.0624 56.1707 59.057 56.272 59.0464 56.368H51.9264V55.04H57.9904L57.2064 55.456C57.217 54.9653 57.1157 54.5333 56.9024 54.16C56.689 53.7867 56.3957 53.4933 56.0224 53.28C55.6597 53.0667 55.2384 52.96 54.7584 52.96C54.2677 52.96 53.8357 53.0667 53.4624 53.28C53.0997 53.4933 52.8117 53.792 52.5984 54.176C52.3957 54.5493 52.2944 54.992 52.2944 55.504V55.824C52.2944 56.336 52.4117 56.7893 52.6464 57.184C52.881 57.5787 53.2117 57.8827 53.6384 58.096C54.065 58.3093 54.5557 58.416 55.1104 58.416C55.5904 58.416 56.0224 58.3413 56.4064 58.192C56.7904 58.0427 57.1317 57.808 57.4304 57.488L58.5024 58.72C58.1184 59.168 57.633 59.5147 57.0464 59.76C56.4704 59.9947 55.809 60.112 55.0624 60.112ZM65.8475 51.36C66.5302 51.36 67.1382 51.4933 67.6715 51.76C68.2155 52.0267 68.6422 52.4373 68.9515 52.992C69.2608 53.536 69.4155 54.24 69.4155 55.104V60H67.4155V55.36C67.4155 54.6027 67.2342 54.0373 66.8715 53.664C66.5195 53.2907 66.0235 53.104 65.3835 53.104C64.9142 53.104 64.4982 53.2 64.1355 53.392C63.7728 53.584 63.4902 53.872 63.2875 54.256C63.0955 54.6293 62.9995 55.104 62.9995 55.68V60H60.9995V51.456H62.9035V53.76L62.5675 53.056C62.8662 52.512 63.2982 52.096 63.8635 51.808C64.4395 51.5093 65.1008 51.36 65.8475 51.36ZM75.8883 60.112C74.9923 60.112 74.1923 59.9253 73.4883 59.552C72.7949 59.168 72.2509 58.6453 71.8563 57.984C71.4616 57.3227 71.2643 56.5707 71.2643 55.728C71.2643 54.8747 71.4616 54.1227 71.8563 53.472C72.2509 52.8107 72.7949 52.2933 73.4883 51.92C74.1923 51.5467 74.9923 51.36 75.8883 51.36C76.7203 51.36 77.4509 51.5307 78.0803 51.872C78.7203 52.2027 79.2056 52.6933 79.5363 53.344L78.0003 54.24C77.7443 53.8347 77.4296 53.536 77.0563 53.344C76.6936 53.152 76.2989 53.056 75.8723 53.056C75.3816 53.056 74.9389 53.1627 74.5443 53.376C74.1496 53.5893 73.8403 53.8987 73.6163 54.304C73.3923 54.6987 73.2803 55.1733 73.2803 55.728C73.2803 56.2827 73.3923 56.7627 73.6163 57.168C73.8403 57.5627 74.1496 57.8667 74.5443 58.08C74.9389 58.2933 75.3816 58.4 75.8723 58.4C76.2989 58.4 76.6936 58.304 77.0563 58.112C77.4296 57.92 77.7443 57.6213 78.0003 57.216L79.5363 58.112C79.2056 58.752 78.7203 59.248 78.0803 59.6C77.4509 59.9413 76.7203 60.112 75.8883 60.112ZM85.1561 60.112C84.2068 60.112 83.3748 59.9253 82.6601 59.552C81.9561 59.168 81.4068 58.6453 81.0121 57.984C80.6281 57.3227 80.4361 56.5707 80.4361 55.728C80.4361 54.8747 80.6228 54.1227 80.9961 53.472C81.3801 52.8107 81.9028 52.2933 82.5641 51.92C83.2361 51.5467 83.9988 51.36 84.8521 51.36C85.6841 51.36 86.4255 51.5413 87.0761 51.904C87.7268 52.2667 88.2388 52.7787 88.6121 53.44C88.9855 54.1013 89.1721 54.88 89.1721 55.776C89.1721 55.8613 89.1668 55.9573 89.1561 56.064C89.1561 56.1707 89.1508 56.272 89.1401 56.368H82.0201V55.04H88.0841L87.3001 55.456C87.3108 54.9653 87.2095 54.5333 86.9961 54.16C86.7828 53.7867 86.4895 53.4933 86.1161 53.28C85.7535 53.0667 85.3321 52.96 84.8521 52.96C84.3615 52.96 83.9295 53.0667 83.5561 53.28C83.1935 53.4933 82.9055 53.792 82.6921 54.176C82.4895 54.5493 82.3881 54.992 82.3881 55.504V55.824C82.3881 56.336 82.5055 56.7893 82.7401 57.184C82.9748 57.5787 83.3055 57.8827 83.7321 58.096C84.1588 58.3093 84.6495 58.416 85.2041 58.416C85.6841 58.416 86.1161 58.3413 86.5001 58.192C86.8841 58.0427 87.2255 57.808 87.5241 57.488L88.5961 58.72C88.2121 59.168 87.7268 59.5147 87.1401 59.76C86.5641 59.9947 85.9028 60.112 85.1561 60.112Z"
            fill="black"
          />
        </svg>
        <svg
          width="68"
          height="72"
          viewBox="0 0 68 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M33.3641 35.7963C20.285 26.4236 12.666 19.4958 12.666 12.5156C12.666 5.60649 18.3251 0 25.2996 0C28.6188 0 31.6407 1.27439 33.8955 3.34932L33.9983 3.45431L34.1015 3.34932C36.3551 1.27439 39.3782 0 42.6979 0C49.6722 0 55.3327 5.60626 55.3327 12.5156C55.3327 19.5103 47.6618 26.4597 34.6334 35.7963C34.2542 36.0679 33.7435 36.0679 33.3643 35.7963H33.3641ZM37.7728 25.5854V15.2006H41.5786L34.0133 7.70413L26.448 15.2006H30.2533V25.5854H37.7728Z"
            fill="black"
          />
          <path
            d="M9.376 54.8H11.456V66H9.376V54.8ZM3.584 66H1.504V54.8H3.584V66ZM9.536 61.2H3.408V59.424H9.536V61.2ZM14.2651 66V57.456H16.2651V66H14.2651ZM15.2731 56.048C14.8998 56.048 14.5905 55.9307 14.3451 55.696C14.1105 55.4613 13.9931 55.1787 13.9931 54.848C13.9931 54.5067 14.1105 54.224 14.3451 54C14.5905 53.7653 14.8998 53.648 15.2731 53.648C15.6465 53.648 15.9505 53.76 16.1851 53.984C16.4305 54.1973 16.5531 54.4693 16.5531 54.8C16.5531 55.152 16.4358 55.4507 16.2011 55.696C15.9665 55.9307 15.6571 56.048 15.2731 56.048ZM22.7621 69.216C21.9728 69.216 21.1995 69.1093 20.4421 68.896C19.6955 68.6933 19.0821 68.3947 18.6021 68L19.4981 66.496C19.8715 66.8053 20.3408 67.0507 20.9061 67.232C21.4821 67.424 22.0635 67.52 22.6501 67.52C23.5888 67.52 24.2768 67.3013 24.7141 66.864C25.1515 66.4373 25.3701 65.792 25.3701 64.928V63.408L25.5301 61.472L25.4661 59.536V57.456H27.3701V64.704C27.3701 66.2507 26.9755 67.3867 26.1861 68.112C25.3968 68.848 24.2555 69.216 22.7621 69.216ZM22.5061 65.616C21.6955 65.616 20.9595 65.4453 20.2981 65.104C19.6475 64.752 19.1301 64.2667 18.7461 63.648C18.3728 63.0293 18.1861 62.304 18.1861 61.472C18.1861 60.6507 18.3728 59.9307 18.7461 59.312C19.1301 58.6933 19.6475 58.2133 20.2981 57.872C20.9595 57.5307 21.6955 57.36 22.5061 57.36C23.2315 57.36 23.8821 57.504 24.4581 57.792C25.0341 58.08 25.4928 58.528 25.8341 59.136C26.1861 59.744 26.3621 60.5227 26.3621 61.472C26.3621 62.4213 26.1861 63.2053 25.8341 63.824C25.4928 64.432 25.0341 64.8853 24.4581 65.184C23.8821 65.472 23.2315 65.616 22.5061 65.616ZM22.8101 63.92C23.3115 63.92 23.7595 63.8187 24.1541 63.616C24.5488 63.4027 24.8528 63.1147 25.0661 62.752C25.2901 62.3787 25.4021 61.952 25.4021 61.472C25.4021 60.992 25.2901 60.5707 25.0661 60.208C24.8528 59.8347 24.5488 59.552 24.1541 59.36C23.7595 59.1573 23.3115 59.056 22.8101 59.056C22.3088 59.056 21.8555 59.1573 21.4501 59.36C21.0555 59.552 20.7461 59.8347 20.5221 60.208C20.3088 60.5707 20.2021 60.992 20.2021 61.472C20.2021 61.952 20.3088 62.3787 20.5221 62.752C20.7461 63.1147 21.0555 63.4027 21.4501 63.616C21.8555 63.8187 22.3088 63.92 22.8101 63.92ZM34.8475 57.36C35.5302 57.36 36.1382 57.4933 36.6715 57.76C37.2155 58.0267 37.6422 58.4373 37.9515 58.992C38.2608 59.536 38.4155 60.24 38.4155 61.104V66H36.4155V61.36C36.4155 60.6027 36.2342 60.0373 35.8715 59.664C35.5195 59.2907 35.0235 59.104 34.3835 59.104C33.9142 59.104 33.4982 59.2 33.1355 59.392C32.7728 59.584 32.4902 59.872 32.2875 60.256C32.0955 60.6293 31.9995 61.104 31.9995 61.68V66H29.9995V54.128H31.9995V59.76L31.5675 59.056C31.8662 58.512 32.2982 58.096 32.8635 57.808C33.4395 57.5093 34.1008 57.36 34.8475 57.36ZM45.5665 66V54.8H50.8145C52.1585 54.8 53.1825 55.0667 53.8865 55.6C54.5905 56.1227 54.9425 56.8267 54.9425 57.712C54.9425 58.3093 54.8038 58.8213 54.5265 59.248C54.2492 59.664 53.8758 59.9893 53.4065 60.224C52.9478 60.448 52.4465 60.56 51.9025 60.56L52.1905 59.984C52.8198 59.984 53.3852 60.1013 53.8865 60.336C54.3878 60.56 54.7825 60.8907 55.0705 61.328C55.3692 61.7653 55.5185 62.3093 55.5185 62.96C55.5185 63.92 55.1505 64.6667 54.4145 65.2C53.6785 65.7333 52.5852 66 51.1345 66H45.5665ZM47.6465 64.368H51.0065C51.7852 64.368 52.3825 64.24 52.7985 63.984C53.2145 63.728 53.4225 63.3173 53.4225 62.752C53.4225 62.1973 53.2145 61.792 52.7985 61.536C52.3825 61.2693 51.7852 61.136 51.0065 61.136H47.4865V59.52H50.5905C51.3158 59.52 51.8705 59.392 52.2545 59.136C52.6492 58.88 52.8465 58.496 52.8465 57.984C52.8465 57.4613 52.6492 57.072 52.2545 56.816C51.8705 56.56 51.3158 56.432 50.5905 56.432H47.6465V64.368ZM57.7384 66V54.8H62.3464C63.3384 54.8 64.1864 54.96 64.8904 55.28C65.605 55.6 66.1544 56.0587 66.5384 56.656C66.9224 57.2533 67.1144 57.9627 67.1144 58.784C67.1144 59.6053 66.9224 60.3147 66.5384 60.912C66.1544 61.5093 65.605 61.968 64.8904 62.288C64.1864 62.608 63.3384 62.768 62.3464 62.768H58.8904L59.8184 61.792V66H57.7384ZM59.8184 62.016L58.8904 61.008H62.2504C63.1677 61.008 63.8557 60.816 64.3144 60.432C64.7837 60.0373 65.0184 59.488 65.0184 58.784C65.0184 58.0693 64.7837 57.52 64.3144 57.136C63.8557 56.752 63.1677 56.56 62.2504 56.56H58.8904L59.8184 55.536V62.016Z"
            fill="black"
          />
        </svg>
        <svg
          width="59"
          height="74"
          viewBox="0 0 59 74"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40.7205 26.6658C40.7205 32.2598 35.8159 36.7944 29.7655 36.7944C23.7151 36.7944 18.8105 32.2599 18.8105 26.6658C18.8105 21.0722 23.7151 16.5371 29.7655 16.5371C35.8159 16.5371 40.7205 21.0721 40.7205 26.6658Z"
            fill="black"
          />
          <path
            d="M40.7145 31.1117C40.0944 32.4552 39.1644 33.5923 38.0273 34.6258C41.0245 35.8659 43.2982 37.8296 44.3317 40.0001C44.6417 39.2766 44.8483 38.45 44.8483 37.6229C44.8487 35.0389 43.195 32.8687 40.7145 31.1116L40.7145 31.1117Z"
            fill="black"
          />
          <path
            d="M41.6323 25.218C41.7358 25.7346 41.7358 26.1481 41.7358 26.6651C41.7358 27.492 41.6323 28.3186 41.4258 29.0422C43.5963 30.0758 45.25 31.2128 45.9731 32.763C46.2832 32.1429 46.4897 31.4194 46.4897 30.7993C46.4897 28.6284 44.6295 26.6648 41.6324 25.2181L41.6323 25.218Z"
            fill="black"
          />
          <path
            d="M43.4003 14.779C42.9868 14.779 42.6768 14.779 42.2633 14.6755C41.8498 17.0527 40.9197 18.9128 39.4727 20.2563C40.0927 20.9799 40.5063 21.9099 40.9197 22.737C43.8134 20.5664 45.6739 17.5692 45.7774 14.262C45.0539 14.6755 44.2273 14.7789 43.4002 14.7789L43.4003 14.779Z"
            fill="black"
          />
          <path
            d="M20.0505 20.2554C18.6035 18.8083 17.6733 17.0516 17.3634 14.6745C16.9499 14.778 16.5364 14.778 16.1232 14.778C15.2962 14.778 14.5731 14.6745 13.8496 14.3645C13.9531 17.6717 15.7098 20.5658 18.6039 22.736C19.017 21.8059 19.4305 20.9789 20.0505 20.2554Z"
            fill="black"
          />
          <path
            d="M17.7857 26.6632C17.7857 26.2497 17.7857 25.8362 17.8891 25.4231C15.0985 26.8701 13.3418 28.8338 13.3418 30.9009C13.3418 31.5209 13.5484 32.2444 13.8584 32.8645C14.5819 31.5209 16.132 30.2808 18.1991 29.2473C17.9922 28.4203 17.7857 27.5937 17.7857 26.6632Z"
            fill="black"
          />
          <path
            d="M18.9238 31.3164C16.5466 32.9699 15.0996 35.1406 15.0996 37.6207C15.0996 38.4477 15.3062 39.2743 15.5131 39.8944C16.4432 37.8273 18.6138 35.8636 21.5075 34.6235C20.4743 33.6934 19.5438 32.5568 18.9238 31.3163L18.9238 31.3164Z"
            fill="black"
          />
          <path
            d="M22.6345 3.51384C22.428 6.201 20.2574 8.37155 17.4667 8.37155C14.5731 8.37155 12.299 5.99438 12.299 3.20376C12.299 1.96364 12.7125 0.93014 13.3326 0C10.7492 1.13667 8.88867 3.72075 8.88867 6.61444C8.88867 10.5417 12.0924 13.8489 16.1232 13.8489C20.1539 13.8489 23.3577 10.6452 23.3577 6.61444C23.358 5.47739 23.048 4.44389 22.6345 3.51375L22.6345 3.51384Z"
            fill="black"
          />
          <path
            d="M36.4708 3.51384C36.6774 6.201 38.848 8.37155 41.6386 8.37155C44.5323 8.37155 46.8064 5.99438 46.8064 3.20376C46.8064 1.96364 46.3929 0.93014 45.7728 0C48.3565 1.13705 50.1135 3.6172 50.1135 6.61444C50.1135 10.5417 46.9098 13.8489 42.879 13.8489C38.8483 13.8489 35.6445 10.6452 35.6445 6.61444C35.7472 5.47739 36.0573 4.44389 36.4708 3.51375L36.4708 3.51384Z"
            fill="black"
          />
          <path
            d="M35.0256 17.0516C35.6456 16.7416 35.9556 16.2246 35.9556 15.5015C35.9556 14.5714 35.1286 13.7444 34.1985 13.7444C33.2684 13.7444 32.4414 14.5714 32.4414 15.5015C32.4414 15.8115 32.5449 16.0181 32.648 16.225C33.5788 16.4316 34.3019 16.7416 35.0254 17.0516L35.0256 17.0516Z"
            fill="black"
          />
          <path
            d="M24.5047 17.052C25.2282 16.742 26.0548 16.432 26.8819 16.225C26.9854 16.0185 27.0884 15.7084 27.0884 15.5015C27.0884 14.5714 26.2615 13.7444 25.3313 13.7444C24.4012 13.7444 23.5742 14.5714 23.5742 15.5015C23.5742 16.1219 23.9878 16.742 24.5047 17.052Z"
            fill="black"
          />
          <path
            d="M6.688 68.16C5.83467 68.16 5.04 68.0213 4.304 67.744C3.57867 67.456 2.944 67.056 2.4 66.544C1.86667 66.0213 1.45067 65.408 1.152 64.704C0.853333 64 0.704 63.232 0.704 62.4C0.704 61.568 0.853333 60.8 1.152 60.096C1.45067 59.392 1.872 58.784 2.416 58.272C2.96 57.7493 3.59467 57.3493 4.32 57.072C5.04533 56.784 5.84 56.64 6.704 56.64C7.62133 56.64 8.45867 56.8 9.216 57.12C9.97333 57.4293 10.6133 57.8933 11.136 58.512L9.792 59.776C9.38667 59.3387 8.93333 59.0133 8.432 58.8C7.93067 58.576 7.38667 58.464 6.8 58.464C6.21333 58.464 5.67467 58.56 5.184 58.752C4.704 58.944 4.28267 59.216 3.92 59.568C3.568 59.92 3.29067 60.336 3.088 60.816C2.896 61.296 2.8 61.824 2.8 62.4C2.8 62.976 2.896 63.504 3.088 63.984C3.29067 64.464 3.568 64.88 3.92 65.232C4.28267 65.584 4.704 65.856 5.184 66.048C5.67467 66.24 6.21333 66.336 6.8 66.336C7.38667 66.336 7.93067 66.2293 8.432 66.016C8.93333 65.792 9.38667 65.456 9.792 65.008L11.136 66.288C10.6133 66.896 9.97333 67.36 9.216 67.68C8.45867 68 7.616 68.16 6.688 68.16ZM18.1229 68V66.272L18.0109 65.904V62.88C18.0109 62.2933 17.8349 61.84 17.4829 61.52C17.1309 61.1893 16.5975 61.024 15.8829 61.024C15.4029 61.024 14.9282 61.0987 14.4589 61.248C14.0002 61.3973 13.6109 61.6053 13.2909 61.872L12.5069 60.416C12.9655 60.064 13.5095 59.8027 14.1389 59.632C14.7789 59.4507 15.4402 59.36 16.1229 59.36C17.3602 59.36 18.3149 59.6587 18.9869 60.256C19.6695 60.8427 20.0109 61.7547 20.0109 62.992V68H18.1229ZM15.4349 68.112C14.7949 68.112 14.2349 68.0053 13.7549 67.792C13.2749 67.568 12.9015 67.264 12.6349 66.88C12.3789 66.4853 12.2509 66.0427 12.2509 65.552C12.2509 65.072 12.3629 64.64 12.5869 64.256C12.8215 63.872 13.2002 63.568 13.7229 63.344C14.2455 63.12 14.9389 63.008 15.8029 63.008H18.2829V64.336H15.9469C15.2642 64.336 14.8055 64.448 14.5709 64.672C14.3362 64.8853 14.2189 65.152 14.2189 65.472C14.2189 65.8347 14.3629 66.1227 14.6509 66.336C14.9389 66.5493 15.3389 66.656 15.8509 66.656C16.3415 66.656 16.7789 66.544 17.1629 66.32C17.5575 66.096 17.8402 65.7653 18.0109 65.328L18.3469 66.528C18.1549 67.0293 17.8082 67.4187 17.3069 67.696C16.8162 67.9733 16.1922 68.112 15.4349 68.112ZM27.4256 59.36C28.1083 59.36 28.7163 59.4933 29.2496 59.76C29.7936 60.0267 30.2203 60.4373 30.5296 60.992C30.839 61.536 30.9936 62.24 30.9936 63.104V68H28.9936V63.36C28.9936 62.6027 28.8123 62.0373 28.4496 61.664C28.0976 61.2907 27.6016 61.104 26.9616 61.104C26.4923 61.104 26.0763 61.2 25.7136 61.392C25.351 61.584 25.0683 61.872 24.8656 62.256C24.6736 62.6293 24.5776 63.104 24.5776 63.68V68H22.5776V59.456H24.4816V61.76L24.1456 61.056C24.4443 60.512 24.8763 60.096 25.4416 59.808C26.0176 59.5093 26.679 59.36 27.4256 59.36ZM37.4664 68.112C36.5704 68.112 35.7704 67.9253 35.0664 67.552C34.373 67.168 33.829 66.6453 33.4344 65.984C33.0397 65.3227 32.8424 64.5707 32.8424 63.728C32.8424 62.8747 33.0397 62.1227 33.4344 61.472C33.829 60.8107 34.373 60.2933 35.0664 59.92C35.7704 59.5467 36.5704 59.36 37.4664 59.36C38.2984 59.36 39.029 59.5307 39.6584 59.872C40.2984 60.2027 40.7837 60.6933 41.1144 61.344L39.5784 62.24C39.3224 61.8347 39.0077 61.536 38.6344 61.344C38.2717 61.152 37.877 61.056 37.4504 61.056C36.9597 61.056 36.517 61.1627 36.1224 61.376C35.7277 61.5893 35.4184 61.8987 35.1944 62.304C34.9704 62.6987 34.8584 63.1733 34.8584 63.728C34.8584 64.2827 34.9704 64.7627 35.1944 65.168C35.4184 65.5627 35.7277 65.8667 36.1224 66.08C36.517 66.2933 36.9597 66.4 37.4504 66.4C37.877 66.4 38.2717 66.304 38.6344 66.112C39.0077 65.92 39.3224 65.6213 39.5784 65.216L41.1144 66.112C40.7837 66.752 40.2984 67.248 39.6584 67.6C39.029 67.9413 38.2984 68.112 37.4664 68.112ZM46.7343 68.112C45.7849 68.112 44.9529 67.9253 44.2383 67.552C43.5343 67.168 42.9849 66.6453 42.5903 65.984C42.2063 65.3227 42.0143 64.5707 42.0143 63.728C42.0143 62.8747 42.2009 62.1227 42.5743 61.472C42.9583 60.8107 43.4809 60.2933 44.1423 59.92C44.8143 59.5467 45.5769 59.36 46.4303 59.36C47.2623 59.36 48.0036 59.5413 48.6543 59.904C49.3049 60.2667 49.8169 60.7787 50.1903 61.44C50.5636 62.1013 50.7503 62.88 50.7503 63.776C50.7503 63.8613 50.7449 63.9573 50.7343 64.064C50.7343 64.1707 50.7289 64.272 50.7183 64.368H43.5983V63.04H49.6623L48.8783 63.456C48.8889 62.9653 48.7876 62.5333 48.5743 62.16C48.3609 61.7867 48.0676 61.4933 47.6943 61.28C47.3316 61.0667 46.9103 60.96 46.4303 60.96C45.9396 60.96 45.5076 61.0667 45.1343 61.28C44.7716 61.4933 44.4836 61.792 44.2703 62.176C44.0676 62.5493 43.9663 62.992 43.9663 63.504V63.824C43.9663 64.336 44.0836 64.7893 44.3183 65.184C44.5529 65.5787 44.8836 65.8827 45.3103 66.096C45.7369 66.3093 46.2276 66.416 46.7823 66.416C47.2623 66.416 47.6943 66.3413 48.0783 66.192C48.4623 66.0427 48.8036 65.808 49.1023 65.488L50.1743 66.72C49.7903 67.168 49.3049 67.5147 48.7183 67.76C48.1423 67.9947 47.4809 68.112 46.7343 68.112ZM52.6714 68V59.456H54.5754V61.808L54.3514 61.12C54.6074 60.544 55.0074 60.1067 55.5514 59.808C56.106 59.5093 56.794 59.36 57.6154 59.36V61.264C57.53 61.2427 57.45 61.232 57.3754 61.232C57.3007 61.2213 57.226 61.216 57.1514 61.216C56.394 61.216 55.7914 61.44 55.3434 61.888C54.8954 62.3253 54.6714 62.9813 54.6714 63.856V68H52.6714Z"
            fill="black"
          />
        </svg>
        <svg
          width="44"
          height="71"
          viewBox="0 0 44 71"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.226 40C10.2355 37.3995 10.3116 34.8641 10.5399 32.4623H11.8143V40H35.3371L35.3368 32.462H36.6106C36.8386 34.8625 36.9122 37.4001 36.9213 39.9997H43.9512C44.0241 36.6766 44.0471 33.6028 43.7943 31.1335C43.188 25.3362 40.4092 21.4051 35.5334 20.7305C33.1669 20.405 28.9605 20.4827 28.9605 20.4827H18.1904C18.1904 20.4827 13.984 20.405 11.6174 20.7305C6.74062 21.4053 3.96177 25.3363 3.35577 31.1335C3.10137 33.6029 3.12465 36.676 3.1976 39.9997L10.226 40Z"
            fill="black"
          />
          <path
            d="M33.627 5.42403C33.627 3.95427 32.4321 2.75933 30.9636 2.75933C30.4809 2.75933 30.0341 2.89832 29.6436 3.12347C28.0081 1.21442 25.5856 0 22.8766 0C20.7191 0 18.7409 0.767258 17.1992 2.04268C16.8436 1.82036 16.4269 1.68609 15.9775 1.68609C14.6974 1.68609 13.6562 2.72695 13.6562 4.00577C13.6562 4.73592 14.0012 5.3799 14.5304 5.80566C14.1697 6.77383 13.9628 7.8175 13.9628 8.91214C13.9628 11.7337 15.2779 14.2456 17.3258 15.8779C17.2384 16.1222 17.1821 16.3803 17.1821 16.6542C17.1821 17.9331 18.2227 18.9739 19.5034 18.9739C20.3977 18.9739 21.1669 18.4592 21.5537 17.7151C21.986 17.7799 22.4256 17.8243 22.8763 17.8243C25.7013 17.8243 28.2163 16.5042 29.8486 14.4515H29.8508C31.1303 14.4515 32.1701 13.4109 32.1701 12.1318C32.1701 11.563 31.957 11.0476 31.6161 10.6442C31.7255 10.0838 31.7875 9.50494 31.7875 8.91278C31.7875 8.59173 31.768 8.27444 31.7362 7.96248C32.8258 7.62791 33.627 6.62321 33.627 5.42393L33.627 5.42403ZM20.0234 9.41126C20.5504 9.41126 20.979 9.8408 20.979 10.3685C20.979 10.8964 20.5504 11.3257 20.0234 11.3257C19.4951 11.3257 19.0656 10.8965 19.0656 10.3685C19.0656 9.84115 19.4954 9.41126 20.0234 9.41126ZM15.9779 2.91277C16.5801 2.91277 17.0703 3.40268 17.0703 4.00579C17.0703 4.60891 16.5807 5.09946 15.9779 5.09946C15.3742 5.09946 14.8833 4.60891 14.8833 4.00579C14.8833 3.40267 15.3742 2.91277 15.9779 2.91277ZM19.5042 17.7472C18.9005 17.7472 18.4093 17.2567 18.4093 16.6542C18.4093 16.0511 18.9001 15.5605 19.5042 15.5605C20.1064 15.5605 20.5966 16.0511 20.5966 16.6542C20.5963 17.2567 20.1064 17.7472 19.5042 17.7472ZM29.8517 13.2248C29.2485 13.2248 28.7577 12.7342 28.7577 12.1311C28.7577 11.5283 29.2485 11.0381 29.8517 11.0381C30.4545 11.0381 30.9444 11.5286 30.9444 12.1311C30.9444 12.7342 30.4541 13.2248 29.8517 13.2248ZM30.9635 6.8628C30.1692 6.8628 29.5243 6.21692 29.5243 5.42419C29.5243 4.63177 30.1698 3.98559 30.9635 3.98559C31.7566 3.98559 32.4006 4.63115 32.4006 5.42419C32.4009 6.21724 31.756 6.8628 30.9635 6.8628Z"
            fill="black"
          />
          <path
            d="M0.92 65L5.96 53.8H8.008L13.064 65H10.888L6.552 54.904H7.384L3.064 65H0.92ZM3.24 62.408L3.8 60.776H9.848L10.408 62.408H3.24ZM18.1383 65.112C17.2423 65.112 16.4423 64.9253 15.7383 64.552C15.0449 64.168 14.5009 63.6453 14.1063 62.984C13.7116 62.3227 13.5143 61.5707 13.5143 60.728C13.5143 59.8747 13.7116 59.1227 14.1063 58.472C14.5009 57.8107 15.0449 57.2933 15.7383 56.92C16.4423 56.5467 17.2423 56.36 18.1383 56.36C18.9703 56.36 19.7009 56.5307 20.3303 56.872C20.9703 57.2027 21.4556 57.6933 21.7863 58.344L20.2503 59.24C19.9943 58.8347 19.6796 58.536 19.3063 58.344C18.9436 58.152 18.5489 58.056 18.1223 58.056C17.6316 58.056 17.1889 58.1627 16.7943 58.376C16.3996 58.5893 16.0903 58.8987 15.8663 59.304C15.6423 59.6987 15.5303 60.1733 15.5303 60.728C15.5303 61.2827 15.6423 61.7627 15.8663 62.168C16.0903 62.5627 16.3996 62.8667 16.7943 63.08C17.1889 63.2933 17.6316 63.4 18.1223 63.4C18.5489 63.4 18.9436 63.304 19.3063 63.112C19.6796 62.92 19.9943 62.6213 20.2503 62.216L21.7863 63.112C21.4556 63.752 20.9703 64.248 20.3303 64.6C19.7009 64.9413 18.9703 65.112 18.1383 65.112ZM28.3631 56.36C29.0458 56.36 29.6538 56.4933 30.1871 56.76C30.7311 57.0267 31.1578 57.4373 31.4671 57.992C31.7765 58.536 31.9311 59.24 31.9311 60.104V65H29.9311V60.36C29.9311 59.6027 29.7498 59.0373 29.3871 58.664C29.0351 58.2907 28.5391 58.104 27.8991 58.104C27.4298 58.104 27.0138 58.2 26.6511 58.392C26.2885 58.584 26.0058 58.872 25.8031 59.256C25.6111 59.6293 25.5151 60.104 25.5151 60.68V65H23.5151V56.456H25.4191V58.76L25.0831 58.056C25.3818 57.512 25.8138 57.096 26.3791 56.808C26.9551 56.5093 27.6165 56.36 28.3631 56.36ZM38.4999 65.112C37.5505 65.112 36.7185 64.9253 36.0039 64.552C35.2999 64.168 34.7505 63.6453 34.3559 62.984C33.9719 62.3227 33.7799 61.5707 33.7799 60.728C33.7799 59.8747 33.9665 59.1227 34.3399 58.472C34.7239 57.8107 35.2465 57.2933 35.9079 56.92C36.5799 56.5467 37.3425 56.36 38.1959 56.36C39.0279 56.36 39.7692 56.5413 40.4199 56.904C41.0705 57.2667 41.5825 57.7787 41.9559 58.44C42.3292 59.1013 42.5159 59.88 42.5159 60.776C42.5159 60.8613 42.5105 60.9573 42.4999 61.064C42.4999 61.1707 42.4945 61.272 42.4839 61.368H35.3639V60.04H41.4279L40.6439 60.456C40.6545 59.9653 40.5532 59.5333 40.3399 59.16C40.1265 58.7867 39.8332 58.4933 39.4599 58.28C39.0972 58.0667 38.6759 57.96 38.1959 57.96C37.7052 57.96 37.2732 58.0667 36.8999 58.28C36.5372 58.4933 36.2492 58.792 36.0359 59.176C35.8332 59.5493 35.7319 59.992 35.7319 60.504V60.824C35.7319 61.336 35.8492 61.7893 36.0839 62.184C36.3185 62.5787 36.6492 62.8827 37.0759 63.096C37.5025 63.3093 37.9932 63.416 38.5479 63.416C39.0279 63.416 39.4599 63.3413 39.8439 63.192C40.2279 63.0427 40.5692 62.808 40.8679 62.488L41.9399 63.72C41.5559 64.168 41.0705 64.5147 40.4839 64.76C39.9079 64.9947 39.2465 65.112 38.4999 65.112Z"
            fill="black"
          />
        </svg>
      </div>
    </CustomPageWrapper>
  );
}

const BrandsCard = ({ src }: { src: string }) => {
  return (
    <div className="flex items-center justify-center bg-white sm-3 rounded-xl min-w-[148px] py-5">
      <img
        src={src}
        alt="brand logo"
        className="aspect-square max-w-[100px] mix-blend-multiply"
      />
    </div>
  );
};

const FeatureCard = ({
  heading,
  subHeading,
}: {
  heading: string;
  subHeading: string;
}) => {
  return (
    <div className="flex items-start gap-2">
      <div className="flex-[0.1] pt-1">
        <QualityIcon />
      </div>
      <div>
        <p className="text-black text-lg not-italic font-medium mb-1">
          {heading}
        </p>
        <p className="text-black text-base not-italic font-normal leading-6">
          {subHeading}
        </p>
      </div>
    </div>
  );
};
