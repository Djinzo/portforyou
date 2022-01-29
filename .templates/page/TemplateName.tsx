import React from "react";
import TemplateNameStyle from "./TemplateName.style";
import Head from "next/head";
import { NextPage } from "next";

const TemplateName: NextPage = () => (
  <TemplateNameStyle.Container>
    <Head>
      <title>TemplateName</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <h1>TemplateName Page</h1>
  </TemplateNameStyle.Container>
);

export default TemplateName;
