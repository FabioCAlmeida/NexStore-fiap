

export function ProductCardSkeleton() {
    return (
        <div className="card animate-pulse p-3">
            <div className="mb-3 h-32 rounded-lg bg-stone-200"></div>
            <div className="mb-3 h-3 w-3/4 rounded-lg bg-stone-200"></div>
            <div className="mb-3 h-3 w-1/2 rounded-lg bg-stone-200"></div>
        </div>
    )
}