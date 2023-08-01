
import Link from "next/link";

export default async function Home() {

	return (
        <main>
            <Link href={'/shop'}> Visit the Shop </Link>
        </main>
    );
}
