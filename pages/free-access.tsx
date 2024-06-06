// pages/free-access.tsx
import type { AppProps } from "next/app";
import Head from "next/head";
import { Fragment } from "react";
import DesignV from "./design-v2";
import "./global.css";
import Script from 'next/script';

const FreeAccessPage = () => {
  return (
    <Fragment>
    
      <div>
        <h1>Collabmaps bridges the gap between Businesses and Content Creators</h1>
        <p>This is the free-access page.</p>
      </div>
    <DesignV />
    </Fragment>
  );
};

export default FreeAccessPage;
