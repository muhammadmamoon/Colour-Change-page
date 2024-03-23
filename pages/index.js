
import { Inter } from "next/font/google";
import ColorChangingButton from "./button/page";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <ColorChangingButton/>
    </main>
    
    
  );
}
