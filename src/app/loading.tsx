export default function Loading() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-background bg-opacity-70 z-50">
            <div className="loader text-gray-100">
                Loading...
            </div>
        </div>
    );
}
