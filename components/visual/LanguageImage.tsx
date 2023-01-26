import { useLanguage } from "../../utils/lang";


export default function LanguageImage(props){
  let lang = useLanguage();
  const src = `/img/i18n/${lang}/${props.src}`
  return <img {...props} src={src} />
}