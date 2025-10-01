import DashboardCard from "../dashboard-cards";

export default function DashboardPage() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-8 w-full mt-8">
        <DashboardCard
          title="Produtos"
          description="Gerenciar"
          href="/admin/manage/produtos"
        />
        <DashboardCard
          title="Usuários"
          description="Gerenciar"
          href="/admin/manage/usuarios"
        />

        
      </div>
    </div>
  );
}
