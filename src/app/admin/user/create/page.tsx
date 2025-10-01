import DashboardTitle from "@/components/dashboard/dashboar-title";
import CreateUser from "@/components/crud/usuarios/create";

export default function Page() {
  return (
    <div className="w-full space-y-12">
      <DashboardTitle title="Criar Usuário" description="Crie um usuário por aqui" />
      <CreateUser />
    </div>
  );
}
