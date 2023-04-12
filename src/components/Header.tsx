import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const linkClassNames = "text-slate-900 hover:text-slate-600 cursor-pointer";

export default function Header() {
    return (
        <header className="py-6 px-6 bg-white flex justify-center align-center">
            <NavLink to="/" className="logo text-lg cursor-pointer text-slate-900 hover:text-slate-700">
                <span className="font-light">dota2</span>&nbsp;
                <span className="font-semibold">superfans</span>
            </NavLink>
        </header>
    );
}