"use client";

import { useEffect } from "react";

/**
 * Observa todo elemento com a classe "reveal" e adiciona "is-visible"
 * quando ele entra na tela — é isso que dispara a animação do CSS.
 * Não desenha nada na página.
 */
export function AnimacoesDeEntrada() {
  useEffect(() => {
    const elementos = document.querySelectorAll<HTMLElement>(".reveal");
    const observador = new IntersectionObserver(
      (entradas) => {
        for (const entrada of entradas) {
          if (entrada.isIntersecting) {
            entrada.target.classList.add("is-visible");
            observador.unobserve(entrada.target); // anima só uma vez
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    elementos.forEach((el) => observador.observe(el));
    return () => observador.disconnect();
  }, []);

  return null;
}
