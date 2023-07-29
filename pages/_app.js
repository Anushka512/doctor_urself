import AuthProvider from "@/Context/AuthProvider";


// import Navbar from "@/components/Shared/Navbar";
// import TopNav from "@/components/Shared/TopNav";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Head from "next/head";
const queryClient = new QueryClient()
// import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Doctor Yourself</title>
      <meta name="description"  content="this is doctor yourself website" />
    </Head>
      <AuthProvider>
        {/* <div className="sticky top-0 ">
          <TopNav />
          <Navbar />
        </div> */}
        {/* <ThemeProvider attribute="class" defaultTheme="light"> */}
        <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
        {/* </ThemeProvider> */}
      </AuthProvider>
    </>
  );
}
