import { SearchBarIcon } from "@/Icons";
 
type Props = {
  label: string;
  value: string;
  className?: string;
  setSearchValue: any;
  handleFocus: () => void;
};
 
export default function Searchbar({
  label,
  className,
  setSearchValue,
  value,
  handleFocus
}: Props) {
  return (
    <>
      <div
      style={{ position: "relative", zIndex: 999 }}
        className={`w-full z-50 flex items-center gap-4 bg-white p-[10px] border-2 border-gray-400 rounded-[10px]  ${className} `
      }
      >
        <SearchBarIcon />
        <input
          type="text"
          placeholder={`Search for ${label}`}
          className="outline-none text-black text-sm not-italic font-medium w-full z-50 "
          
          value={value}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={handleFocus}
        />
      </div>
     
    </>
  );
}
 
 