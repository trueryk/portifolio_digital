import fatecid from '../../public/fatecid.png'

export default function Home() {
    return (
        <>
            <section className="bg-(--bg-blue) pt-16 font-bold h-screen" id="inicio">
                <div className="grid grid-row-2">
                    <div className="flex flex-row">
                        <h1 className="ms-16 text-start text-[5rem] text-(--text-blue)">
                            Portifólio
                            <span className="block -mt-10">Digital
                                <p className="inline text-(--text-blue) text-[1.2rem] ms-4 font-normal">Uma visita ao meu portfólio digital.</p>
                            </span>
                        </h1>

                    </div>
                    <div className="h-[50vh] w-[30vw] flex justify-center justify-self-center text-justify">
                        <p className="inline-block self-end font-normal text-(--text-blue) text-[1.4rem]">Conheça um pouco do trabalho desenvolvido durante o 2º semestre de 2026</p>
                    </div>
                </div>
            </section>
            <section className="h-screen flex" id="sobre-curso">
                <div className="grid grid-cols-2 gap-2 w-full">
                    <div className="">
                        <h1>Sobre o curso</h1>

                    </div>
                    <div className="h-full flex">
                        <img className="w-[45vw] justify-self-center self-center" src={fatecid}/>
                    </div>
                </div>
            </section>
        </>
    )
}