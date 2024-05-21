import { Suspense } from "react";
import { getPackages } from "@/app/lib/data";
import BoxCard from "./box-card";
import { Skeleton } from "@/app/ui/skeletons";
import { PackageInfo, PackageResponse } from "@/app/lib/definitions";

const PackageTable = async () => {

    const response: PackageResponse = await getPackages();
    const packages: Array<PackageInfo> = response.packages;
    console.log("PackageTable")
    return (
        <div className="max-w-m px-4">
            <h2 className="full-width text-center item-center text-xl font-semi-bold p-3">Package Information</h2>
            <Suspense fallback={<Skeleton />}>
                <div className="grid item-center justify-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-4">
                    {
                        packages.map((p, i) => <BoxCard key={i} name={p.name} current_version={p.current_version} original_version={p.original_version} is_different={p.is_different} />)
                    }
                </div>
            </Suspense>
        </div>
    );
}

export default PackageTable;
