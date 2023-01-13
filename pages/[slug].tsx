import Head from "next/head";
import CommonFooter from "../components/CommonFooter";
import Navigation from "components/Navigation";

const page = ({ content, seoDescription, style, pageSpesificStyle }) => {
  return (
    <>
      <Head>
        <script src="https://www.googleoptimize.com/optimize.js?id=OPT-KMD99G5"></script>
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="description" content={seoDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation
        isSticky={true}
        isDimmed={true}
        isActionable={false}
      ></Navigation>
      <main>
        <div
          className="container"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </main>
      <CommonFooter />
      <style dangerouslySetInnerHTML={{ __html: style }}></style>
      <style dangerouslySetInnerHTML={{ __html: pageSpesificStyle }}></style>
    </>
  );
};

export async function getServerSideProps(context) {
  let found = false;
  let props = {
    name: context.params.slug,
    content: "Not found",
    seoTitle: "Not found",
    seoDescription: "Not found",
    style: "",
    head: "",
    description: "",
    pageSpesificHead: "",
    pageSpesificStyle: "",
  };
  if (found) {
    return {
      props: props,
    };
  } else {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
}

export default page;
