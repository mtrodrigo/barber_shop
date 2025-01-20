import styles from "./Sobre.module.css"

export default function Sobre(){
    return(
        <section className={styles.sobre_container}>
            <h1>Bem-vindo a Barber Shop</h1>
            <p><strong>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.</strong></p>
            <p>Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.</p>
            <span>S. Kelly</span>
        </section>
    )
}