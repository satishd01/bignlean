export default function OverviewCard({ overview }: { overview: any }) {
  return (
    <div className="w-[650px] max-[650px]:w-full">
      <h2 className="text-black text-base not-italic font-bold mb-3">
        Overview
      </h2>
      <div className="border-[1px] p-4 rounded-lg border-gray-300">
        <div className="flex justify-end items-center mb-3">
          <p className="text-black text-xs not-italic font-semibold"></p>
        </div>
        <div className="w-full h-[2px] bg-gray-300 mb-6"></div>
        <div className="flex flex-col gap-3">
          {overview?.map((item: any, index: number) => (
            <div key={index} className="flex items-center justify-between">
              <p className="text-black text-base not-italic font-semibold">
                {item?.nutrients}
              </p>
              <p className="text-black text-sm not-italic font-normal">
                {item?.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
