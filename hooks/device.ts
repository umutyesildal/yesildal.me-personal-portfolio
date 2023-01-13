import mobile from 'is-mobile';
import { RequestContext } from 'pages/_app';
import { useContext } from 'react';

export function useMobile(){
  const ctx = useContext(RequestContext);
  return ctx.isMobile || mobile();
}