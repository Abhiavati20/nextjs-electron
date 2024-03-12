import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <center className="flex h-screen items-center justify-center">
            <h1>Hello World</h1>
        </center>
    );
}
