import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Layout } from "../../components/Layout/Layout";

const NewsPost = () => {
  const params = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchId() {
    if (params) {
      const response = await axios.get(
        "http://localhost:4000/news/" + params.id,
      );
      setData(response.data);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchId();
  }, [params]);

  if (loading) {
    return <span>Loading..</span>;
  }

  return (
    <Layout>
      <div>
        <h1>{data.title}</h1>
        <img src={data.image_big} />
      </div>
    </Layout>
  );
};

export default NewsPost;
