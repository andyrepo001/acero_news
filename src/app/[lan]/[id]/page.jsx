import { getData } from "@/hooks/server-api";
import CategoryView from "@/components/views/category-view/category-view";
import ErrorView from "@/components/views/error-view/error-view";

export async function generateMetadata({ params }) {
  const retrievedData = await getData(`category/${params?.lan}/${params?.id}`);

  return {
    title: retrievedData?.category_name,
    description: retrievedData?.category_template,
  };
}

export default async function Page({ params }) {
  const retrievedData = await getData(`category/${params?.lan}/${params?.id}`);
  const articles = await getData(
    `category/${params?.lan}/${params?.id}/articles`
  );

  const views = {
    category: CategoryView,
  };

  const CurrentView = views[retrievedData?.category_template];

  if (!CurrentView) return <ErrorView />;

  return (
    <CurrentView
      articles={articles}
      pageTitle={retrievedData}
      category_slug={params?.id}
    />
  );
}
