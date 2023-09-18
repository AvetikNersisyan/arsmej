import { useRouter } from 'next/router';
import Page from '../../components/page'; // Import your Page component
import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllPagesWithSlugs, getPageBySlug } from '../../lib/api';
import Navigation from '../../components/navigation';

const PageBySlug = ({ pageBySlug, allPages }) => {
  const router = useRouter();
  const { slug } = router.query;

  console.log(pageBySlug, 'pageBySlug');
  console.log(slug, 'slug');
  
  if (!slug) return <div>Loading...</div>;

  return (
  <>
        <Navigation data={allPages} isLoading={false} />

  <Page slug={slug as string} loading={false} error={false} data={pageBySlug} />;
  </>
  
  )
};


export const getStaticProps: GetStaticProps = async ({ preview = false, params }) => {
    const { slug } = params; // Retrieve slug from params
    const changedSlug = Array.isArray(slug) ? slug[0]: slug;
    const pageBySlug = await getPageBySlug(changedSlug)
    const allPages = await getAllPagesWithSlugs()
    
    
  
    return {
      props: { pageBySlug, allPages },
      revalidate: 10,
    }
  }


  export const getStaticPaths: GetStaticPaths = async () => {
    const allPages = await getAllPagesWithSlugs()
  
    return {
      paths: allPages.edges.map(({ node }) => `/pages/${node.slug}`) || [],
    //   allPages,
      fallback: true,
    }
  }



  
// export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
//     // const allPosts = await getAllPostsForHome(preview)
//     const allPages = await getAllPagesWithSlugs()
  
//     return {
//       props: { allPages, preview },
//       revalidate: 10,
//     }
//   }
  


export default PageBySlug;
