import logo from "./logo.svg";
import "./App.css";

const articles = [
  {
    width: "500px",
    url: "https://images.unsplash.com/photo-1646765989243-3fb9ed5b526f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
    title: "Article 1",
    content: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed
        luctus turpis. Sed non fermentum libero. Pellentesque tristique ac erat
        sit amet efficitur. Nunc cursus scelerisque erat, vitae malesuada metus
        facilisis at. Fusce id enim vel turpis sagittis maximus vitae quis erat.
        Ut finibus aliquam enim sit amet luctus. Praesent enim leo, congue
        mollis lacinia id, venenatis nec ligula`,
  },
  {
    width: "400px",
    url: "https://images.unsplash.com/photo-1646734006492-bd189822bb2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
    title: "Article 2",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed
          luctus turpis. Sed non fermentum libero. Pellentesque tristique ac
          erat sit amet efficitur. Nunc cursus scelerisque erat, vitae malesuada
          metus facilisis at. Fusce id enim vel turpis sagittis maximus vitae
          quis erat. Ut finibus aliquam enim sit amet luctus. Praesent enim leo,
          congue mollis lacinia id, venenatis nec ligula.`,
  },
  {
    width: "400px",
    url: "https://images.unsplash.com/photo-1646734006492-bd189822bb2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
    title: "Article 3",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed
          luctus turpis. Sed non fermentum libero. Pellentesque tristique ac
          erat sit amet efficitur. Nunc cursus scelerisque erat, vitae malesuada
          metus facilisis at. Fusce id enim vel turpis sagittis maximus vitae
          quis erat. Ut finibus aliquam enim sit amet luctus. Praesent enim leo,
          congue mollis lacinia id, venenatis nec ligula.`,
  },
  {
    width: "400px",
    url: "https://images.unsplash.com/photo-1646734006492-bd189822bb2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
    title: "Article 4",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed
          luctus turpis. Sed non fermentum libero. Pellentesque tristique ac
          erat sit amet efficitur. Nunc cursus scelerisque erat, vitae malesuada
          metus facilisis at. Fusce id enim vel turpis sagittis maximus vitae
          quis erat. Ut finibus aliquam enim sit amet luctus. Praesent enim leo,
          congue mollis lacinia id, venenatis nec ligula.`,
  },
];

// const test1 = <h1>123</h1>;
// const test2 = <h2>455</h2>;
// const array = [test1, test2];

function Post({ url: imageUrl, title, width, content }) {
  return (
    <div>
      <h2>{title}</h2>
      <img width={width} src={imageUrl} alt={title} />
      <div>{content}</div>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>This is a awesome page</h1>
      {articles
        .filter((article) => article.title !== "Article 3")
        .map((article) => {
          return (
            <Post
              title={article.title}
              width={article.width}
              url={article.url}
              content={article.content}
            />
          );
        })}
    </div>
  );
}

export default App;
