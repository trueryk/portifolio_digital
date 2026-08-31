import Book from "../AssetsSVG/Book"

export default function CardsMaterias(props) {
    return (
        <>
            <div className={`card h-fit ps-2 py-2 w-[45vw] shadow-2xs rounded-xs ${props.bg}`}>
                <div className="flex flex-row">
                    <Book color={props.color} h="4vh" w="4vh" />
                    <p className="ps-1 text-white">{props.materia}</p>
                </div>
                <div className="my-6 ms-2">
                    <a href={props.link} className="py-2 px-4 bg-white rounded hover:bg-white/0 hover:text-white hover:border-solid hover:border-2">Ver registros</a>
                </div>
            </div>
        </>
    )
}