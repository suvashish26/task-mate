import type { ReactNode } from "react";

type taskProps = {
    category: string;
    title: string;
    description: string;
    icon: ReactNode;
}

function Tasks({ category, title, description, icon }: taskProps){
    return(
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white px-5 py-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="mb-3 inline-flex rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-700">
                {category}
            </div>
            <h2 className="text-lg font-semibold text-slate-950 mb-2">{title}</h2>
            <p className="text-sm leading-6 text-slate-600 mb-5">{description}</p>
            <div className="flex items-center gap-2 text-slate-400">{icon}</div>
        </div>
    )
}
export default Tasks