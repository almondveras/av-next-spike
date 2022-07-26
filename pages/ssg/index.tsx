import styles from '../../styles/Pages.module.css'

interface Joke {
    joke?: string
    setup?: string
    delivery?: string
}

interface JokesResponse {
    error: boolean
    jokes: Joke[]
}

export async function getStaticProps() {
    const res = await fetch(`https://v2.jokeapi.dev/joke/Programming?amount=20`)
    const data = await res.json()

    return { props: { data } }
}

function PageSsg({ data }: { data: JokesResponse}) {
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Static Site Generation</h1>
            <h2 className={styles.subheader}>Daily Joke Dosis</h2>
            {data?.jokes?.map((joke, index) => (
                <div className={styles.card} key={index}>
                    <p>{joke?.joke}</p>
                    <p>{joke?.setup}</p>
                    <p>{joke?.delivery}</p>
                </div>
            ))}
        </div>
    )
}

export default PageSsg