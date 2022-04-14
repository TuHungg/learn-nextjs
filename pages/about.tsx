import { useRouter } from 'next/dist/client/router';
import * as React from 'react';

export interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
  const router = useRouter();

  console.log('About query: ', router.query);

  return <div>About page</div>;
}

export async function getServerSideProps() {
  return {
    props: {},
  };
}
