export default async function AboutPage({params}){
    const {id} = await params;
    // console.log(params);

    return <>
    <h1>Product Details</h1>
    <p>The product id is </p>
    <h2>{ id }</h2>
    </>
}