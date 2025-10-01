import DashboardTitle from "@/components/dashboard/dashboar-title";
import ManageUserTable from "@/components/tabelas/usuario";

export default function Page() {
  return (
    <div className="w-full space-y-12">
      <DashboardTitle title="Gerenciar Usuários" description="Faça as ações administrativas por aqui" />
      <ManageUserTable />
    </div>
  );
}