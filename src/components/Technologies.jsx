import React from "react";


const techonologies = [
    "ASP.NET Core",
    "C#",
    "Java",
    "JavaScript",
    "SQL Server",
    "Python",
    "Git",
    "PostgreSQL",
    "React",
    "Angular",
];

function Techonologies() {

    return (

        <section
            id="skills"
            className="
            relative border-y 
            border-white/[0.06]
            bg-slate-950/50
            py-16 overflow-hidden"
        >


            <div className="
            mx-auto max-w-7xl 
            px-6 mb-12">


                <h2 className="
                text-center text-xs 
                font-semibold uppercase 
                tracking-[0.2em]
                text-blue-400">

                    Tecnologías

                </h2>



                <p className="
                mt-2 text-center 
                text-2xl font-bold 
                text-white">

                    Herramientas y Frameworks con los que trabajo

                </p>


            </div>

            <div className="
            relative w-full 
            overflow-hidden 
            whitespace-nowrap">


<div className="animate-carousel flex items-center gap-16">

{
    [...techonologies, ...techonologies].map((technology,index)=>(

        <span 
        key={index}
        className="
        text-lg font-medium 
        text-slate-400 
        hover:text-white">

            {technology}

        </span>

    ))
}

</div>


            </div>


        </section>

    );

}


export default Techonologies;