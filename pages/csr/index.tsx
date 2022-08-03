import { useEffect, useState } from 'react'

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

function PageCsr() {
    const [data, setData] = useState<JokesResponse>()
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(`https://v2.jokeapi.dev/joke/Programming?amount=20`)
            .then((res) => res.json())
            .then((data) => {
                setData(data as JokesResponse)
                setLoading(false)
            })
    }, [])

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Client Side Rendering</h1>
            <h2 className={styles.subheader}>Daily Joke Dosis</h2>
            {isLoading && <p>Loading jokes...</p>}
            {!isLoading && data?.jokes?.map((joke, index) => (
                <div className={styles.card} key={index}>
                    <p>{joke?.joke}</p>
                    <p>{joke?.setup}</p>
                    <p>{joke?.delivery}</p>
                </div>
            ))}
        </div>
    )
}

export default PageCsr