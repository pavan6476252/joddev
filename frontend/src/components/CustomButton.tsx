import React from 'react'

function CustomButton({ onClick, className, children, disable }: { className: string, children: React.ReactNode, onClick: () => void, disable?: boolean }) {
    return (
        <button disabled={disable} onClick={onClick}
            className={"middle none center mr-4 rounded-lg   py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none " + className}
            data-ripple-light="true"
        >
            {children}
        </button>
    )
}

export default CustomButton