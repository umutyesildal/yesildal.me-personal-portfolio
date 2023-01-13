import "../styles/globals.css";
import App from "next/app";
import 'react-notion-x/src/styles.css'
import { createContext, useEffect } from "react";
import { RequestContext as RequestContextType } from "types/requestContext";

let requestContext = {} as Partial<RequestContextType>;
export const RequestContext = createContext<Partial<RequestContextType>>({});
const RequestContextProvider = RequestContext.Provider;

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
