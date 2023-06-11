import {SignForm} from "../components/SignForm";
import {Header} from "../components/Header";
import Head from "next/head"
//import {auth, firebase} from "../firebase/clientApp";
//import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { signInWithPhoneNumber } from "firebase/auth";


export default function Auth () {
    // auth.languageCode = 'it';
    // const uiConfig = {
    //     // Redirect to / after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    //     signInSuccessUrl: "/",
    //     // GitHub as the only included Auth Provider.
    //     // You could add and configure more here!
    //     signInOptions: [firebase.auth.PhoneAuthProvider.PROVIDER_ID],
    // };



    const getSMS = (auth, phoneNumber, appVerifier) => signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            window.confirmationResult = confirmationResult;
            // ...
        }).catch((error) => {
            // Error; SMS not sent
            // ...
        });


    return (
        <>
            <Head>
                <title>СППР по диагностике дерматологических заболеваний</title>
                <meta name="description" content="Определим ваше заболевание без похода к врачу" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            {/*<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />*/}
            <SignForm getSMS={getSMS}/>
        </>
    )
}
