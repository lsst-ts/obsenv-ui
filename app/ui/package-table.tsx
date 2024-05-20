import { packageList } from "../lib/package-data";
import BoxCard from "./box-card";

const PackageTable = () => {
    const packages = packageList.packages;
    return (
        <div className="max-w-m px-4">
            <h2 className="full-width text-center item-center text-xl font-semi-bold p-3">Package Information</h2>
            <div className="grid grid-cols-3 mb-4">
                {
                    packages.map((p, i) => <BoxCard key={i} name={p.name} current={p.current_version} original={p.original_version} />)
                }
            </div>
        </div>
    );
}

export default PackageTable;
