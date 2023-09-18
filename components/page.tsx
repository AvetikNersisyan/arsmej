
const Page = ({ slug, loading, error, data }) => {

  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
  console.log(data, 'data');
  
    const page = data.pageBy;
    const content = data.content;
  
    return (
      <div>
        <h1>{data.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    );
  };
  
  export default Page;