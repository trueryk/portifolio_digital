import panda from '../Images/panda.png'
import tpa from '../conteudo/tpa.json'
import antisora from '../Images/antisora.gif'
import { useState } from 'react'

export default function TecnicasProgramacao() {
    const [detalhes, setDetalhes] = useState([])

    const showDetalhes = (data, tipo, titulo, resumo, reflexao,) => {
        const detalhesInfo = {
            "data": data,
            "tipo": tipo,
            "titulo": titulo,
            "resumo": resumo,
            "reflexao": reflexao
        }
        setDetalhes(detalhesInfo)
    }
    return (
        <>
            <div className="fixed right-0 h-screen w-[35vw] shadow-xl px-10 py-10">
                {detalhes.length != 0 ? <button onClick={() => { setDetalhes([]) }} className="mt-2 ms-2 rounded-full w-[2rem] h-[2rem] border-1">X</button> : <></>}
                <h1 className='ms-5 text-[1.4rem] mt-4'>Detalhes:</h1>
                {detalhes.length == 0 ?
                    <div className='grid grid-cols-7 mt-5 bg-amber-200/50 px-2 py-5 border-1 border-amber-400 rounded-xl'>
                        <div className='px-2 col-span-5'> <span className='text-[#3d7593]'>Selecione o botão</span>
                            <div className="bg-[#b5d3e3] border-1 text-[#3d7593] rounded w-fit px-5 h-fit">DETALHES +</div>
                            <span className='text-[#3d7593]'> em um dos cards para ver mais </span></div>
                        <div className="col-span-2 flex justify-center items-center">
                            <div className="rounded-full border-1 w-[3rem] h-[3rem] text-center content-center text-[2rem] text-amber-500 border-amber-500 bg-amber-300/50">
                                !
                            </div>
                        </div>
                    </div>
                    :
                    <div className="mt-3 border-s-2 border-[#1c4587]/60 bg-[#b5d3e3]/50 px-4 py-4">
                        <div className="text-[#1c4587] font-medium">
                            {detalhes.data} - {detalhes.tipo}
                        </div>
                        <div className="mt-2 ms-3 font-medium">
                            {detalhes.titulo}
                        </div>
                         <div className="mt-7 text-[#1c4587] font-medium">
                            Resumo:
                        </div>
                        <div className="mt-2 ps-3 border-s-2 border-[#1c4587]/60 text-[#1c4587]/80">
                            {detalhes.resumo}
                        </div>
                        <div className="mt-7 text-[#1c4587] font-medium">
                            Reflexão sobre a aula:
                        </div>
                        <div className="mt-2 ps-3 border-s-2 border-[#1c4587]/60 text-[#1c4587]/80">
                            {detalhes.reflexao}
                        </div>
                    </div>}
            </div>
            <div className="w-[65vw]">
                <div className="grid col-span-7 px-10 grid-cols-2 grid-rows-auto pt-10  gap-4 pb-10">
                    <div className="cols-start-2 flex justify-center">
                        <img src={antisora} className='w-50 h-50' />
                    </div>
                    {tpa.map((v, i) =>
                        <div key={i} className={`h-[28rem] mt-10 rounded-lg row-span-2 shadow-xl row-start-${i + 1} row-end-${i + 3}`}>
                            <div className=" w-full flex justify-center mt-7">
                                <img src={panda} alt="" />
                            </div>
                            <div className="">
                                <p className='font-medium px-7 pt-2'> {v.Data}:</p>
                                <p className='text-[.9rem] px-7 pt-2'>{v.Titulo}</p>
                            </div>
                            <div className="tag-button flex flex-row mt-4 ms-7">
                                <div className={`border-1 border-[#507045] tag rounded px-3 ${v.Tipo == "Aula" ? "bg-[#cae1c2] text-[#507045]" : ""}`}>{v.Tipo}</div>
                                <span className='mx-2'>|</span><button onClick={() => { showDetalhes(v.Data, v.Tipo, v.Titulo, v.Resumo, v.Reflexao) }} className="bg-[#b5d3e3] text-[#3d7593] rounded px-3 border-1">DETALHES +</button>
                                {v.Anexo == null ? <></> : <><a className="border-1 rounded  ms-2 text-center px-3 hover:bg-black hover:text-white" href={v.Anexo}>Ver anexo</a></>}
                            </div>
                        </div>)}
                </div>
            </div>

        </>
    )
}