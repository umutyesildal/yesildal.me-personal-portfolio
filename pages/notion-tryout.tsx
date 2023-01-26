import * as React from "react";

import { ExtendedRecordMap } from "notion-types";

import { NotionPage } from "../components/notion/NotionPage";
import { rootNotionPageId } from "../services/config";
import notion from "../services/notion";

export const getStaticProps = async () => {
  const pageId = rootNotionPageId;
  const recordMap = await notion.getPage(pageId);

  return {
    props: {
      recordMap,
    },
    revalidate: 10,
  };
};

export default function Page({ recordMap }: { recordMap: ExtendedRecordMap }) {
  return <NotionPage recordMap={recordMap} rootPageId={rootNotionPageId} />;
}
