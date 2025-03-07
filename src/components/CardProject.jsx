import { useState } from "react"

export const CardProject = () => {
   const [open, setOpen] = useState(false);
   return (
      <article className={open ? "card-project open" : "card-project"}>
         <div className="card-project-inner">
            <div className="flip-card-front">
               <div className="card-image">
                  <img
                     src="https://porfolio-george-contreras.vercel.app/images/project05.jpg"
                     alt=""
                  />
               </div>
               <p className="card-front-title">Api Real Faker Eccomers</p>
               <span>culminado 24/08/32</span>
               <p className="card-front-desp">
                  En ete proyecto se consume el Api Fake Store de manera realista, se realiza con 
                  redux y react , demas tecnologias y pocibles causa de res.
               </p>
               <div className="card-front-buttoms">
                  <button onClick={() => setOpen(!open)}>Ver mas</button>
               </div>
            </div>
            <div className="flip-card-back">
               <p>nombre del proyecto</p>
               <span>tecnologias utilizadas</span>
               <ul>
                  <li>React</li>
                  <li>Next.js</li>
                  <li>Tailwind CSS</li>
                  <li>Node.js</li>
                  <li>MongoDB</li>
                  <li>Express.js</li>
               </ul>
               <button>github</button>
               <button>visitae</button>
               <button onClick={()=>setOpen(!open)}>atras</button>
            </div>
         </div>
      </article>
   )
}
