export default function PublicError(props) {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-red-200 rounded-lg">
            <h1 className="text-xl font-medium">Something went wrong</h1>
            <p>{props?.error?.message ?? `Please try again later`}</p>
            {props?.error?.stack}
        </div>
    );
}