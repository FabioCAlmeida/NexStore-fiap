import { Link } from "react-router-dom";

export function NotFoundPage(){
    return(
        <section className="py-24 text-center">
            <p className="font-display text-5xl font-bold *:text-stone-300">404</p>

            <h1 className="mb-2 mt-3 font-display text-xl font-bold">Pagina não encontrada</h1>

            <p className="">O endereço digitado não existe no Nexstore</p>

            <Link to="/">Voltar ao catálogo</Link>
        </section>
    )
}