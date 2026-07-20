const jobs = [

    {
        year: "2025 - 2025",

        title: "Desarrollador Backend",

        company: "COYA SOFTWARE",

        description: [
            "Migración de sistemas legados de Visual Basic a .NET moderno, mejorando la mantenibilidad y escalabilidad del software de laboratorio.",
            "Diseño y construcción de APIs RESTful robustas utilizando C# y Entity Framework Core bajo patrones de Clean Architecture.",
            "Implementación de principios SOLID para asegurar la separación de capas (Datos, Negocio y Presentación)."
        ]
    },


    {
        year: "2024 - 2025",

        title: "Pasante Desarrollador Full Stack",

        company: "Grandi y Asociados",

        description: [
            "Desarrollo integral de funcionalidades CRUD (ABMs) y módulos de gestión utilizando C# .NET, JavaScript y Angular.",
            "Gestión y optimización de bases de datos SQL Server.",
            "Colaboración en el diseño de arquitectura MVC para aplicaciones empresariales."
        ]
    }

];



export default function Experience(){

    return(

        <section
            id="experience"
            className="max-w-6xl mx-auto px-6 py-24"
        >


            <div className="mb-16 text-center">


                <p className="
                    text-blue-400 
                    uppercase 
                    tracking-[4px]
                    mb-4"
                >
                    Experiencia
                </p>



                <h2 className="
                    text-4xl 
                    md:text-5xl 
                    font-bold 
                    text-white"
                >
                    Mi recorrido profesional
                </h2>


            </div>





            <div className="space-y-10">


                {
                    jobs.map((job,index)=>(


                        <div
                            key={index}
                            className="
                            border 
                            border-white/10 
                            rounded-2xl 
                            p-8
                            hover:border-blue-500
                            transition duration-300"
                        >



                            <div className="
                                flex 
                                justify-between 
                                flex-wrap 
                                gap-3"
                            >


                                <div>


                                    <h3 className="
                                        text-2xl 
                                        font-semibold 
                                        text-white"
                                    >
                                        {job.title}
                                    </h3>



                                    <p className="
                                        text-blue-400 
                                        mt-2"
                                    >
                                        {job.company}
                                    </p>


                                </div>



                                <span className="
                                    text-gray-500"
                                >
                                    {job.year}
                                </span>


                            </div>





                            <ul className="
                                mt-6 
                                space-y-3 
                                text-gray-400 
                                leading-7"
                            >

                                {
                                    job.description.map((item,index)=>(

                                        <li 
                                            key={index}
                                            className="flex gap-3"
                                        >

                                            <span className="text-blue-400">
                                                •
                                            </span>

                                            {item}

                                        </li>

                                    ))
                                }

                            </ul>



                        </div>


                    ))
                }


            </div>


        </section>

    )

}