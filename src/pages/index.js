import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      
      <Header/>

      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner />
        <ProductFeed products={products}/>
      </main>
    </div>
  );
}

// Tells next.js that this is no longer a static page. It processes something on the server first
export async function getServerSideProps(context)  {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  return {
    props:{
    products:products,
  },
};
}

// GET >> https://fakestoreapi.com/products