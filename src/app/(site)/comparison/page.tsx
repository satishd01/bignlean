import dynamic from "next/dynamic";
const ComparePage = dynamic(() => import("@/components/compare"), { ssr: false });

export default function Page() {
  return <ComparePage />;
}

// import dynamic from "next/dynamic";
// const ComparePage = dynamic(import("@/components/compare"), { ssr: false });
// export default function page() {
//   return <ComparePage />;
// }
