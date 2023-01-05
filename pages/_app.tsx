import "../styles/globals.css";
import App from "next/app";
import 'react-notion-x/src/styles.css'




type AppRootProps = {
  Component:any,
  pageProps:any,

}
function AppRoot(props:AppRootProps) {
  const Component = props.Component;
  const pageProps = props.pageProps;

  return <Component {...pageProps} />

}


AppRoot.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);
  return { ...appProps }
}

export default AppRoot;
