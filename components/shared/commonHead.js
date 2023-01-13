import Head from "next/head";
import { useRouter } from "next/router";

export default function CommonHead(props){
  const router = useRouter();
  return <Head>
      <title>{props.title}</title>
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