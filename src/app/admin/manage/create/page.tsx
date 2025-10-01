import DashboardTitle from "@/components/dashboard/dashboar-title";
import CreateProduct from "@/components/crud/produtos/create";

export default function Page() {
  return (
    <div className="w-full space-y-12">
      <DashboardTitle title="Criar Produto" description="Crie um produto por aqui" />
      <CreateProduct />
    </div>
  );
}
