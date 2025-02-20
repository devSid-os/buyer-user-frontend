export default function Product() {
    return (
        <div className="mt-20 text-black flex flex-col gap-2 items-start md:flex-row">
            <div style={{"border": "1px solid gray"}} className="w-[10%] hidden flex-col gap-2 md:flex">
                images
            </div>

            <div style={{"border": "1px solid gray"}} className="w-full md:w-[40%]">
                image
            </div>

            <div style={{"border": "1px solid gray"}} className="w-full md:w-[50%]">
                description
            </div>
        </div>
    )
}