import Link from 'next/link';
import styles from './../styles/navigation.module.css';

interface INavigationProps {
    isLoading: boolean;
    data: {
      edges: {
        node: {
          slug: string;
        };
      }[];
    };
  }
  
  const Navigation = ({ isLoading, data }: INavigationProps) => {
    if (isLoading) return <div>Loading...</div>;
  
    return (
      <nav className={styles.navContainer}>
        <ul className={styles.listContainer}>
          {data.edges.map((edge) => (
            <li key={edge.node.slug} className={styles.listItem}>
                <Link
                 className={styles.link}
                  href={`/pages/${edge.node.slug}`}
                  >   
                    {edge.node.slug}
                </Link>
             
            </li>
          ))}
        </ul>
      </nav>
    );
  };
  
  export default Navigation;