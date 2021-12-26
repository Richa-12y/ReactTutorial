import React from 'react'
import { lazy, Suspense } from 'react'
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import Hookes from "./Hookse";
import Hook from "./Hook";
import Hookfi from './Hookfi';
import Product from './Product';
import { Notfound } from './Notfound';
export default function Layout ()
{
    const FourthEx = lazy(() => import("./FourthEx"));

    let id = 4;

    return (
        <BrowserRouter>


            <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Hookes <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/Hookes">Hookes</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/Hook">Hook</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/Hookfi">Hookfi</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to={`/Product/${id}`}>Product</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="Notfound">Notfound</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                            <div className="dropdown-menu" aria-labelledby="dropdownId">
                                <a className="dropdown-item" href="/">Action 1</a>
                                <a className="dropdown-item" href="/">Action 2</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>

            <NavLink to="/stateprops">State Props</NavLink>
            <div>
                <Routes>
                    <Route path="/" element={<Hookes />}></Route>
                    <Route path="/" element={<Hook />}></Route>

                    <Route path="FourthEx" element={<FourthEx />}></Route>
                    <Route path="Hookfi" element={<Hookfi />}></Route>
                    <Route path="Product/:id" element={<Product />}></Route>
                    <Route path="*" element={<Notfound />}></Route>
                    <Route path="stateprops" element={
                        <Suspense fallback={<FourthEx>Loading...</FourthEx>}></Suspense>}>
                    </Route>


                </Routes>
            </div>
        </BrowserRouter>
    )
}
