import Head from "next/head";
import CommonFooter from "../components/CommonFooter";
import parse from 'html-react-parser';
import Navigation from "components/Navigation";

const page = ({name, content, seoTitle, seoDescription, style, head, pageSpesificHead, pageSpesificStyle}) => {
    const generalHeadElements = () => {
        if (head) {
            try {
                return parse(head);
            } catch (error) {
                return null;
            }
        }
    };
    const pageSpesificHeadElements = () => {
        if (pageSpesificHead) {
            try {
                return parse(pageSpesificHead);
            } catch (error) {
                return null;
            }
        }
    };
    return (
        <>
            <Head>
                <script src="https://www.googleoptimize.com/optimize.js?id=OPT-KMD99G5"></script>
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <title>Metavest | {seoTitle}</title>
                <meta
                    name="description"
                    content={seoDescription}
                />
                <link rel="icon" href="/favicon.ico" />
                {generalHeadElements()}
                {pageSpesificHeadElements()}
            </Head>
            <Navigation isSticky={true} isDimmed={true} isActionable={false}></Navigation>
            <main>
                <div
                    className="container"
                    dangerouslySetInnerHTML={{__html: content}}
                ></div>
            </main>
            <CommonFooter/>
            <style dangerouslySetInnerHTML={{__html: style}}></style>
            <style dangerouslySetInnerHTML={{__html: pageSpesificStyle}}></style>
        </>
    );
};

export async function getServerSideProps(context) {
    let found = false;

    const localeDefinitions = {
        tr: "tr-TR",
        pt: "pt",
        es: "es",
        en: "en"
    };

    let props = {
        name: context.params.slug,
        content: "Not found",
        seoTitle: "Not found",
        seoDescription: "Not found",
        style: "",
        head: "",
        description: "",
        pageSpesificHead: "",
        pageSpesificStyle: ""
    }
    const ops = await fetch(`http://3.67.167.17:1337/api/other-page-setting`);
    if (ops && ops.ok) {
        const otherPageSettings = await ops.json();
        if(otherPageSettings){
            props.description = otherPageSettings.data.attributes.description;
            props.style = otherPageSettings.data.attributes.style;
            props.head = otherPageSettings.data.attributes.head;
        }
    }

    const opsDetails = await fetch(`http://3.67.167.17:1337/api/otherpages?locale=${localeDefinitions[context.locale]}&filters[url][$eq]=${context.params.slug}`);
    if (opsDetails && opsDetails.ok) {
        const otherPageDetails = await opsDetails.json();
        if (otherPageDetails.data.length > 0) {
            found = true;
            props.name = otherPageDetails.data[0].attributes.url;
            props.content = otherPageDetails.data[0].attributes.content;
            props.seoTitle = otherPageDetails.data[0].attributes.seoTitle;
            props.seoDescription = otherPageDetails.data[0].attributes.seoDescription;
            props.pageSpesificHead = otherPageDetails.data[0].attributes.head;
            props.pageSpesificStyle = otherPageDetails.data[0].attributes.style;
        }
    }

    if (found) {
        return {
            props: props,
        };
    } else {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }
}

export default page;
