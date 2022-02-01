import Header from "../components/Header";
import Nav from "../components/Nav";
import Viewport from "../components/Viewport";
import List from "../components/List";
import { useEffect, useState } from "react";
import { fetchNums, fetchArticles } from "../api";

function Show() {
  const [loading, setLoading] = useState(true);
  const [articleDatas, setArticleDatas] = useState<object[]>([]);

  useEffect(() => {
    (async () => {
      const json: any = await fetchNums("show");

      const objArr: any = await fetchArticles(json, 0, 10);

      setArticleDatas(objArr);

      console.log(objArr);

      setLoading(false);
    })();
  }, []);

  return (
    <Viewport>
      <Header />
      <Nav />
      <List datas={articleDatas}>
        {/* {loading
          ? "wait"
          : articleDatas?.map((x) => <li key={x.id}>{x.title}</li>)} */}
      </List>
    </Viewport>
  );
}

export default Show;
