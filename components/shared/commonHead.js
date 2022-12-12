import Head from "next/head";
import { useRouter } from "next/router";

export default function CommonHead(props){
  const router = useRouter();
  return <Head>
      <script src="https://www.googleoptimize.com/optimize.js?id=OPT-KMD99G5"></script>
      <meta charSet="UTF-8" />
      <meta name="apple-itunes-app" content={`app-id=1622578169, app-argument=https://metavest.app${router.asPath}`} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>Metavest | {props.title}</title>
      <meta
        name="description"
        content={`The effortless way of investing with crypto. Boost your crypto earnings with competitive DeFi-backed interest rates while investing in the future of finance.`}
      />
      <link rel="icon" href="/favicon.ico" />
      <script type="text/javascript" dangerouslySetInnerHTML={{
        __html: `
          let __root = document.querySelector(':root');
          __root.style.setProperty('--scroll-page', 0);
          document.addEventListener('scroll', function(){
            const pageHeight = __root.clientHeight;
            const offset = __root.scrollTop;
            const page = offset / pageHeight;
            __root.style.setProperty('--scroll-page', page);
          })`
      }}>
        
      </script>
      {props.children}
  </Head>
}