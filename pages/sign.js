import {SignForm} from "../components/SignForm";
import {Header} from "../components/Header";
import Head from "next/head";

export default function Sign () {
    return (
        <>
            <Head>
                <title>Кож-помощь</title>
                <meta name="description" content="Определим ваше заболевание без похода к врачу" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <SignForm />
        </>
    )
}
