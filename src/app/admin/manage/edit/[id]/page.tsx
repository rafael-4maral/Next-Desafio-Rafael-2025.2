import DashboardTitle from "@/components/dashboard/dashboar-title";
import EditProduct from "@/components/crud/produtos/edit";

export default function Page() {
  return (
    <div className="w-full space-y-12">
      <DashboardTitle title="Editar Produto x" description="Edite um produto por aqui" />
      <EditProduct />
     
    </div>
  );
}
