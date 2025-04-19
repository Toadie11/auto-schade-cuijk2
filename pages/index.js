import Image from "next/image";
import { Inter } from "next/font/google";
import IndexPart1 from "@/components/indexPart1";
import IndexPart2 from "@/components/indexPart2";
import IndexPart3 from "@/components/indexPart3";

export default function Home() {
  return (
    <div>
      <IndexPart1 />
      <IndexPart2 />
      <IndexPart3 />
    </div>
  );
}
