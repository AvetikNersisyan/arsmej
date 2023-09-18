
const Page = ({ slug, loading, error, data }) => {

  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
  
    const page = data.pageBy;
  
    return (
      <div>
        {/* <h1>{page.title}</h1> */}
        ddsdfasd
        {/* <div dangerouslySetInnerHTML={{ __html: page.content }} /> */}
      </div>
    );
  };
  
  export default Page;