import classes from "../css/About.module.css";

export default function About() {
  return (
    <div className={classes.main} id="about">
      <div className={classes.content}>
        <div className={classes.title}>Nosotros</div>
        <div>
          <div className={classes.circles}>
            <div className={classes.red}> CONTENIDO GENERAL LINGÜISTICO </div>
            <div className={classes.violet}> CONTENIDO BUSSINESS</div>
            <div className={classes.green}>USO DEL IDIOMA</div>
          </div>
        </div>
        <div className={classes.text}>
          <p>
            Boston Language Consultants es una empresa dedicada a la enseñanza
            del inglés, español y portugués exclusivamente para el mercado
            corporativo desde 1992.
          </p>
          <p>
            Nuestros programas brindan resultados relevantes y efectivos a las
            necesidades de comunicación corporativa.
          </p>
          <p>
            Creamos cursos in-company con objetivos curriculares concretos que
            combinan material de contenido general, de negocios y especializado
            al sector o industria.
          </p>
        </div>
      </div>
    </div>
  );
}
