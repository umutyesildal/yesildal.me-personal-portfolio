import { HtmlProps } from "next/dist/shared/lib/html-context";
import { AnchorHTMLAttributes, HTMLProps } from "react";
import { useLanguage } from "../../utils/lang";

type LanguageLinkProps = HTMLProps<HTMLAnchorElement>;
export default function LanguageLink(props:LanguageLinkProps){
  let lang = useLanguage();
  let hrefString = '';
  if(props.href?.startsWith('mailto:') || props.href?.startsWith('https://') || props.href?.startsWith('http://')){
    hrefString = props.href;
  }else{
    if(lang == 'en'){
      hrefString = `/${props.href}`;
    }else{
      hrefString = `/${lang}/${props.href}`;
    }
  }
 
  return <a {...props} href={hrefString} />
}