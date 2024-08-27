import Link from 'next/link';

export default function ShareMealPage() {
    return (
        <main>
            <h1>Share Meal</h1>
            <nav>
                <ol>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/meals">Meals Page</Link>
                    </li>
                    <li>
                        <Link href="/meals/share">Meals Share Page</Link>
                    </li>
                    <li>
                        <Link href="/community">Community Page</Link>
                    </li>
                    <li>
                        <Link href="/meals/meal-1">Dynamic Meal 1</Link>
                    </li>
                    <li>
                        <Link href="/meals/meal-2">Dynamic Meal 2</Link>
                    </li>
                </ol>
            </nav>
        </main>
    )
}