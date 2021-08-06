import { useRouter } from 'next/router';
import Head from '../components/head';

export default function Post() {
  // useRouter returns the router object
  const router = useRouter();
 
  console.log({ router });
  return (
    <div>
      <Head />
      <a>a</a>
    </div>
  )
}