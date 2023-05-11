import React, { PropsWithChildren } from 'react'
import { Header } from ".";

function Layout({children} : PropsWithChildren): JSX.Element {
    return (
        <>
            <Header/>
            { children }
        </>
    )
}

export { Layout, };
