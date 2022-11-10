import React from "react";
import { Head, Link } from "../Router";

export default function About() {
  return (
    <div>
      <Head title="About | Aigron" description="About | Aigron" />
      about
      <Link to="/">Home</Link>
    </div>
  );
}
