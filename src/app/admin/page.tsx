
import Header from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
import AdminSidebar from '@/components/admin-sidebar/sidebar';
import DashboardTitle from '@/components/dashboard/dashboar-title';
import DashboardPage from '@/components/dashboard/dashboard-page';

export default function Home() {
  return (
    <>

      < AdminSidebar/>
       <DashboardTitle 
        title="Página de Dashboard" 
        description="Faça as ações administrativas por aqui"  
      />
      <DashboardPage />

    </>
  );
}