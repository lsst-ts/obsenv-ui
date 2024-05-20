import { PackageInfo } from "../lib/definitions";

const BoxCard = ({name, current, original}: PackageInfo) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-md shadow-gray-400 bg-gray-900">
            <div className="font-bold text-m text-center item-center py-3">{name}</div>
            <div className="grid grid-cols-3 m-2">
                <div className="text-m text-center col-span-1">Current:</div>
                <div className="text-m px-2 col-span-2">{current}</div>
                <div className="text-m text-center col-span-1">Original:</div>
                <div className="text-m px-2 col-span-2">{original}</div>
            </div>
            <div className="grid grid-cols-6 mb-4">
                <div className="col-end-7 col-span-1">
                    <button className="rounded bg-gray-800 p-3">Edit</button>
                </div>
            </div>
        </div>
    );
}

export default BoxCard;
