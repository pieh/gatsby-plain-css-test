import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "./page-2.css";

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <div className="duplicate">test</div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;
