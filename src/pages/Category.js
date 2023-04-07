import { useMatch } from "react-router-dom";
import NotFound from "./NotFound";


export default function Category() {
  const {params} = useMatch("/categories/:slug");

  const categories = [
    { id: 1, name: "constructors", slug: "constructors" },
    { id: 2, name: "baby toys", slug: "baby-toys" },
    { id: 3, name: "girl toys", slug: "girl-toys" },
    { id: 4, name: "soft toys", slug: "soft-toys" },
    { id: 5, name: "nastolka", slug: "nastolka" },
  ];

  const category = categories.find(
    (category) => category.slug === params.slug
  );

    if(!category){
      return <NotFound />;
    }

  return (
    <div className="Category">
      <h2>{category.name}</h2>
    </div>
  )
}