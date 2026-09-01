import fatecid from '../Images/fatecid.png';
import CardsMaterias from '../components/CardsMaterias';
import antisora from '../Images/antisora.gif'


export default function Home() {
    return (
        <>
            <section className=" pt-16 font-bold h-screen bg-(--bg-beige)" id="inicio">
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
                <div className="grid grid-cols-3 gap-2 w-full">
                    <div className="col-span-1">
                        <h1 className='text-center mt-15 mb-15 font-bold text-[3rem] text-(--text-blue)'>Sobre o curso</h1>
                        <ul className='ms-15'>
                            <li><span className='text-(--text-blue) font-bold'>Duração:</span> 3 Anos - 6 Semestres</li>
                            <li><span className='text-(--text-blue) font-bold'>Formação:</span> Tecnólogo</li>
                            <li><span className='text-(--text-blue) font-bold'>Presencial,</span> no horário da manhã, com 6º semestre Híbrido</li>
                            <li><span className='text-(--text-blue) font-bold'>Cordenador:</span> Prof. Wellington Roque</li>
                            <li className='mt-15'>Este curso pioneiro oferece uma abordagem abrangente para a construção de software que funciona em diversas plataformas!</li>
                        </ul>

                    </div>
                    <div className="col-span-2 h-full flex justify-center">
                        <img className="w-[45vw]" src={fatecid} />
                    </div>
                </div>
            </section>
            <section className="h-screen flex bg-(--bg-beige)" id="materias">
                <div className="grid-cols-2 grid">
                    <div className="ms-15 mt-[10vh] flex flex-col align-center gap-4 col-span-1">
                        <h1 className="text-[2rem]"><span className="overline">MATÉR</span>IAS</h1>
                        <CardsMaterias
                            bg="bg-cyan-700"
                            color="white" 
                            materia="GAP - Gestão Ágil de Projetos"
                            link="/gap" />
                        <CardsMaterias
                            bg="bg-cyan-700"
                            color="white"
                            materia="IHC - Interação Humano Computador"
                            link="/ihc" />
                        <CardsMaterias
                            bg="bg-cyan-700"
                            color="white"
                            materia="TP2 - Técnica de Programação 2"
                            link="/tp" />
                    </div>
                    <div className='col-span-1 flex justify-center items-center'>
                        <img src={antisora} className='w-50 h-50' />
                    </div>
                </div>
            </section>
        </>
    )
}