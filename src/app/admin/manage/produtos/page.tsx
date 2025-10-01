import DashboardTitle from "@/components/dashboard/dashboar-title";
import ManageProductTable from "@/components/tabelas/manage";

export default function Page() {
  return (
    <div className="w-full space-y-12">
      <DashboardTitle title="Gerenciar Produtos" description="Faça as ações administrativas por aqui" />
      <ManageProductTable />
    </div>
  );
}