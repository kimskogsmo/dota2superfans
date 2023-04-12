import React from 'react';

export default function BackIcon({ width, height }: {
    width: number,
    height: number,
}): JSX.Element {
    return (
        <div className="absolute top-5 left-5 w-8 h-8 flex justify-center items-center rounded-full bg-slate-200 hover:bg-slate-300 transition-colors">
            <svg width={width} height={height} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M7.765 4.045a.75.75 0 10-1.03-1.09L2.237 7.203a.748.748 0 00-.001 1.093l4.499 4.25a.75.75 0 001.03-1.091L4.636 8.5h8.614a.75.75 0 000-1.5H4.636l3.129-2.955z"></path></g></svg>
        </div>
    )
}