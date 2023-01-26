import { useRouter } from "next/router";

export function useLanguage(){
  const router = useRouter();
  return router.locale ?? 'en';
}