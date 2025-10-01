import DashboardTitle from "@/components/dashboard/dashboar-title";
import EditUser from "@/components/crud/usuarios/edit";

export default function Page() {
  return (
    <div className="w-full space-y-12">
      <DashboardTitle title="Editar Usuário" description="Edite um usuário por aqui" />
      <EditUser />
      
    </div>
  );
}
