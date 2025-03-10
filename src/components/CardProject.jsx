import { useState } from "react";


export const CardProject = ({ data }) => {
   const [open, setOpen] = useState(false);
   return (
      <article className={open ? "card-project open" : "card-project"} key={data.id}>
         <div className="card-project-inner">
            <div className="flip-card-front">
               <div className="card-image">
                  <img
                     src={`../../src/assets/project0${data.image}-min.jpg`}
                     alt={data.title}
                  />
               </div>
               <section>
                  <p className="card-front-title">{data.title}</p>
                  <span>Culminado : {data.date}</span>
               </section>
               <p className="card-front-desp">
                  {data.description}
               </p>
               <div className="card-front-buttoms">
                  <button onClick={() => setOpen(!open)} class="button-ver-mas">
                     <span class="label">Ver Mas</span>
                     <span class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
                     </span>
                  </button>

               </div>
            </div>
            <div className="flip-card-back">
               <section>
                  <p>{data.title}</p>
                  <span>Tecnologias</span>
                  <ul>
                     {data.tec.map((t) => (
                        <li key={t}>{t}</li>
                     ))}
                  </ul>
               </section>
               <div className="flip-card-back-buttons">
                  <a href={data.git} target="_blank">Git Hub</a>
                  <a href={data.url} target="_blank">Visitar</a>
                  <a onClick={() => setOpen(!open)}>Atras</a>
               </div>
            </div>
         </div>
      </article>
   )
}
