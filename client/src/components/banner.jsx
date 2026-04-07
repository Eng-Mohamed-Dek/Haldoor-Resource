import { ArrowRightIcon } from 'lucide-react';

export default function Banner() {
    return (
        <div className="flex w-full flex-wrap items-center justify-center bg-gradient-to-r from-[#032840] to-[#032840]/80 py-2 text-center font-medium text-white">
            <p>This Website is Sponsered by Hirkaab Academy</p>
            <a href="https://hirkaab.com" className="ml-3 flex items-center gap-1 rounded-md bg-white px-3 py-1 text-xs blue transition hover:bg-slate-200 active:scale-95">
                Check it out
                <ArrowRightIcon className="size-3.5" />
            </a>
        </div>
    );
}
