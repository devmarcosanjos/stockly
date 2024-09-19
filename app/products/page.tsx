import { PlusIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import { DataTable } from "../_components/ui/dataTable";
import { db } from "../_lib/prisma";
import { productsTableColumns } from "./_components/table-columns";

const ProductsPage = async () => {
  // chamar banco de dados
  const products = await db.product.findMany();

  return (
    <div className="m-8 w-full space-y-8 rounded-lg bg-white p-8">
      <div className="flex w-full items-center justify-between">
        <div className="space-y-1">
          <span className="text-xs font-semibold text-slate-500">
            Gestão de
          </span>
          <h2 className="text-2xl font-semibold">Produtos</h2>
        </div>
        <Button className="gap-2">
          <PlusIcon size={20} />
          Novo produto
        </Button>
      </div>

      <DataTable columns={productsTableColumns} data={products} />
    </div>
  );
};

export default ProductsPage;
