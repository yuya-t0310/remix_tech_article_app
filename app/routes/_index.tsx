import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div>
      <h1>Tech Article App</h1>
      <Link to="/articles">記事一覧</Link>
    </div>
  );
}
