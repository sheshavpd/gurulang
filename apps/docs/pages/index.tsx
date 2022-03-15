import Head from "next/head";

import Code from "../components/Code";
import Documentation from "../components/Documentation";
import Footer from "../components/Footer";
import Header from "../components/Header";


export default function Docs() {
  return (
    <div className="bg-background">
      <Head>
        <title>GuruLang - A toy programming language for Kannada :)</title>
        <meta property="og:title" content="GuruLang - A toy programming language for Kannada" key="title" />
        <meta property="og:type" content="website" key="type" />
        <meta property="og:url" content="https://gurulang.js.org" key="url" />
        <meta property="og:description" content="GuruLang is dynamically typed toy programming language for Kannada, written in Typescript. Forked from BhaiLang." key="description" />
        <meta name="description" content="GuruLang is dynamically typed toy programming language, based on an inside joke, written in Typescript. Forked from BhaiLang." />
        <meta property="og:site_name" content="Bhailang Documentation" key="siteName" />
      </Head>
      <Header />
      <Code />
      <Documentation />
      <Footer />
    </div>
  );
}

