import { redirect } from 'next/navigation';

import { UserNameForm } from '@/components/UseNameForm';
import DashboardHeader from '@/components/screens/Dashboard/Header';
import DashboardShell from '@/components/screens/Dashboard/Shell';
import { getPublicUrl } from '@/helpers/getPublicUrl';
import { authOptions } from '@/lib/auth';
import { getCurrentUser } from '@/lib/session';

export default async function SettingsPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect(authOptions?.pages?.signIn || getPublicUrl.login());
  }

  return (
    <DashboardShell>
      <DashboardHeader heading='Settings' text='Manage account and website settings.' />
      <div className='grid gap-10'>
        <UserNameForm user={{ id: user.id, name: user.name || '' }} />
      </div>
    </DashboardShell>
  );
}
