//import "./globals.css";
import RootLayout from "./layout";

import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap stylesheet

export default function App({ Component, pageProps }) {
    return (
        
        <RootLayout>
        <Component {...pageProps} />
        </RootLayout>
    );
}