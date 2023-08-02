import { italiana } from "@/utils/fonts";

export default function Home() {

	return (
        <main className="text-8xl">
            <div className="bg-clothes h-fill bg-cover bg-center flex justify-center items-center">
                <h1 className={`${italiana.className} text-platinum pb-24`}>Fake Store</h1>
            </div>
        </main>
    );
}
