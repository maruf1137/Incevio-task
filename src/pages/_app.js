import "../styles/sass/main.scss";
// import "../styles/index.css";
import Layout from "@/component/layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
