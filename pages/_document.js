import Document, { Html, Head, Main, NextScript } from 'next/document'
import Footer from '../components/global/Footer'
import Header from '../components/global/Header'
import MainLinks from '../components/global/MainLinks'
import MainScripts from '../components/global/MainScripts'
import PreLoader from '../components/global/PreLoader'
import Sidebar from '../components/global/Sidebar'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps}
    }
    
    render() {
        return (
            <Html>
                <Head>
                    <MainLinks />
                </Head>
                <body>
                    {/* <PreLoader /> */}
                    <Main />
                    <Footer />
                    <MainScripts />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;