import "../styles/globals.css";
import { createContext, useEffect } from "react";
import TagManager from "react-gtm-module";
import App from "next/app";
import ua from 'express-useragent';
import { RequestContext as RequestContextType } from "types/requestContext";



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
