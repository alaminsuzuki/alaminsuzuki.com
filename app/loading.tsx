export default function Loading() {
    return (
        <div className="fixed inset-0 z-[100] bg-[#050608] flexflex-col items-center justify-center flex-col">
            <div className="flex flex-col items-center gap-4 animate-pulse">
                <h1 className="font-display text-2xl text-white tracking-widest">Al-Amin Suzuki</h1>
                <div className="flex gap-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                </div>
            </div>
        </div>
    );
}
