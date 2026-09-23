import { Link, Outlet } from "react-router-dom"
import { Header } from "../components/Header"



interface MainLayoutProps {
    totalItems: number
}
export function MainLayout({totalItems}: MainLayoutProps) {

    return (

        <div className="flex min-h-screen flex-col">

            <Header totalItems={totalItems}/>

            <main className="mx-auto w-full max-w-6x1 flex-1 py-6 px-4">
                <Outlet/>
            </main>

            <footer className="border-t border-stone-200 py-6 text-center text-xs text-neural-400">Nexstore - Projeto acadêmico</footer>
        </div>
    )
}