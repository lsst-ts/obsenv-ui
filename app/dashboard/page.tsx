import PackageTable from "../ui/dashboard/package-table";

const Dashboard = () => {
    return(
        <div>
            <h1 className="pl-4 pb-3 pt-1 text-2xl">Rubin Observatory Environment Management</h1>
            <PackageTable />
        </div>
    );
}

export default Dashboard;