import Link from 'next/link';
import styles from '../../styles/Ninjas.module.css'

// runs at build time, fetch data needed.
// never runs in the browser
export const getStaticProps = async () => {

    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    return {
        // attached to the 'props' property
        props: { ninjas: data}
    }
}

const Ninjas = ({ ninjas }: any) => {
    return (
        <div>
            <h1>
                All Ninjas
            </h1>
            {ninjas.map((ninja: any) => (
                <Link href={'/ninjas/' + ninja.id} key={ninja.id}>
                        <h3 className={styles.single}>{ ninja.name }</h3>
                </Link>
            ))}
        </div>
    );
}

export default Ninjas;