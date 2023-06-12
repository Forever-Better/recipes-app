import Layout from '@/components/layout/Layout';
import { getCurrentUser } from '@/lib/session';

export default async function RecipePageLayout({ children }: { children: React.ReactNode }) {
  const user = await getCurrentUser();

  return (
    <Layout
      user={{
        name: user?.name,
        image: user?.image,
        email: user?.email
      }}
    >
      <div className='container'>{children}</div>
    </Layout>
  );
}
