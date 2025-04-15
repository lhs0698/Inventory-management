// App.jsx
import React from "react";

import Products from "./pages/Products/Products";
import Layout from "./components/Layout/Layout";

import "./App.scss";

export default function App() {
  return (
    <Layout>
      <Products></Products>
    </Layout>
  );
}
