'use client'
import { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image"
import Logo from "@/../public/barbearia.png"
import { FaRegMoon } from "react-icons/fa6";
import { MdOutlineWbSunny } from "react-icons/md";
import Banner from "./banner/page";
import Sobre from "./Sobre/page";


export default function Home() {
  
  const [alterarTema, setAlterarTema] = useState(false)

  const trocarTema = () => setAlterarTema(!alterarTema)

  return (
    <main className={alterarTema ? styles.modo_escuro : styles.modo_claro}>
      <header className={styles.topo}>
            <section className={styles.topo_container}>
                <div className={styles.img_container}>
                    <Image className={styles.img_logo} src={Logo} alt="Logo" />
                </div>
                <div className={styles.btn_container}>
                    <button onClick={trocarTema} className={styles.btn}>{alterarTema ? <MdOutlineWbSunny /> : <FaRegMoon />}</button>
                </div>
            </section>
        </header>
      <Banner />
      <Sobre />
    </main>
  );
}

