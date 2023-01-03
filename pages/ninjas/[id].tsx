import Ninjas from ".";

// check how many pages their are based on html data
export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map( (ninja: any) => {
        return {
            params: { id: ninja.id.toString() }
        }
    })
    return {
        paths: paths,
        fallback: false
    }
}

// now fetch each item needed
export const getStaticProps = async (context: any) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return {
        props: { ninja : data }
    }
}

const Details = ({ ninja }: any) => {
    return (
        <div>
            <h1>
                { ninja.name}
            </h1>
            <p>{ ninja.email }</p>
            <p>{ ninja.website }</p>
            <p>{ ninja.address.city }</p>
        </div>
    );
}

export default Details;