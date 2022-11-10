import React from "react";
import { useLoaderData } from "react-router-dom";
import { Head, Link } from "../Router";

export const loader = async () => {
  return "data from loader";
};

export default function Index() {
  const data = useLoaderData();
  return (
    <div>
      <Head title="Home | Aigron" description="Home | Aigron" />
      index
      <div>{data}</div>
      <Link to="/about">About</Link>
    </div>
  );
}
